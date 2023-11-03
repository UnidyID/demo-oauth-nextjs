export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <a href="/auth">Login Custom</a>
        <a href="/api/auth">Login openid-client</a>
      </div>
    </main>
  );
}
