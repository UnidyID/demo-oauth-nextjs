import { generators } from "openid-client";
import { CALLBACK_URL, CLIENT_ID, SCOPE, UNIDY_URL } from "~/app/config";
import { getClient } from "~/pages/api/callback";
import { cookies } from "next/headers";

export const GET = async (request: Request) => {
  if (CALLBACK_URL.endsWith("/api/callback")) {
    const code_verifier = generators.codeVerifier();
    cookies().set("code_verifier", code_verifier);

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

    return Response.redirect(url);
  }

  const url = new URL(`${UNIDY_URL}/oauth/authorize`);

  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", SCOPE);
  url.searchParams.set("redirect_uri", CALLBACK_URL);
  url.searchParams.set("state", "1234567890");
  url.searchParams.set("nonce", "0987654321");

  // url.searchParams.set("prompt", "login");
  url.searchParams.set("max_age", "0");

  url.searchParams.set("code_challenge", "foobar123");
  url.searchParams.set("code_challenge_method", "plain");

  return Response.redirect(url);
};
