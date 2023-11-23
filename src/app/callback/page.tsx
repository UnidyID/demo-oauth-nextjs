import {
  CALLBACK_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  UNIDY_URL,
} from "~/app/config.mjs";

const Main = ({ searchParams, data }: { searchParams: any; data: any }) => {
  return (
    <div>
      <code className="whitespace-pre-wrap">
        {JSON.stringify(searchParams, null, 2)}
      </code>

      {data && (
        <>
          <hr />

          <code className="whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
        </>
      )}
    </div>
  );
};

export default async function Page(params: {
  searchParams: { code: string } | { error: string; error_description: string };
}) {
  try {
    if ("code" in params.searchParams) {
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
          code: params.searchParams.code,
          code_verifier: "foobar123",
        }),
      });

      const json = await res.json();

      return <Main data={json} searchParams={params.searchParams} />;
    } else if ("error" in params.searchParams) {
      return <Main data={null} searchParams={params.searchParams} />;
    } else {
      return <Main data={null} searchParams={params} />;
    }
  } catch (err) {
    return <code>{String(err)}</code>;
  }
}
