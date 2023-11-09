import {
  CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  UNIDY_URL,
} from "~/app/config";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const tokenUrl = new URL(`${UNIDY_URL}/oauth/token`);

  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: CALLBACK_URL,
      grant_type: "authorization_code",
      code: url.searchParams.get("code") as string,
      code_verifier: "foobar123",
    }),
  });

  const json = await res.json();

  return Response.json({ ok: true, json });
};
