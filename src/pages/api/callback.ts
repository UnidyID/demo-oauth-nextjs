import { NextApiRequest, NextApiResponse } from "next";
import { Issuer } from "openid-client";
import {
  PAGES_CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  UNIDY_URL,
} from "~/app/config.mjs";

export const getClient = async () => {
  const unidyIssuer = await Issuer.discover(UNIDY_URL);
  return new unidyIssuer.Client({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uris: [PAGES_CALLBACK_URL],
    response_types: ["code"],
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await getClient();
  const code_verifier = request.cookies.code_verifier;
  const state = request.query.state as string;

  const params = client.callbackParams(request);
  const tokenSet = await client.callback(PAGES_CALLBACK_URL, params, {
    code_verifier,
    state,
  });

  const json = { tokenSet, claims: tokenSet.claims() };

  return response.json({ ok: true, json });
}
