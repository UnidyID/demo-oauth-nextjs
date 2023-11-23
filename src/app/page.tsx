import { UNIDY_URL } from "~/app/config.mjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <a href="/auth">Login Custom</a>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/auth">Login openid-client</a>
        <a href="/auth" target="_blank">
          [new tab] Login Custom
        </a>
        <a href="/api/auth" target="_blank">
          [new tab] Login openid-client
        </a>
        <hr />

        <a href={UNIDY_URL}>Home</a>
      </div>
    </main>
  );
}
