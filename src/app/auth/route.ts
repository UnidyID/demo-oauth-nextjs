import { CALLBACK_URL, CLIENT_ID, SCOPE, UNIDY_URL } from "~/app/config";

export const GET = async (request: Request) => {
  const url = new URL(`${UNIDY_URL}/oauth/authorize`);

  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", SCOPE);
  url.searchParams.set("redirect_uri", CALLBACK_URL);
  url.searchParams.set("state", "1234567890");
  url.searchParams.set("nonce", "0987654321");

  url.searchParams.set("prompt", "login");
  url.searchParams.set("max_age", "0");

  url.searchParams.set("code_challenge", "foobar123");
  url.searchParams.set("code_challenge_method", "plain");

  // return Response.json({
  //   ok: true,
  //   url: url.toString(),
  //   entries: [...url.searchParams.entries()],
  // });

  return Response.redirect(url);
};
