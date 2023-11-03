import { NextApiRequest, NextApiResponse } from "next";
import { generators } from "openid-client";
import { getClient } from "~/pages/api/callback";
import { SCOPE } from "~/app/config";

export default async function (
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const code_verifier = generators.codeVerifier();
  response.setHeader(
    "Set-Cookie",
    `code_verifier=${code_verifier}; Path=/; HttpOnly`,
  );

  const client = await getClient();

  const code_challenge = generators.codeChallenge(code_verifier);
  const url = client.authorizationUrl({
    scope: SCOPE,
    code_challenge,
    code_challenge_method: "S256",
    prompt: "login",
    max_age: 0,
    state: "1234567890",
  });

  response.redirect(url);
}
