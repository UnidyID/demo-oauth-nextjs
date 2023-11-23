import Link from "next/link";
import { UNIDY_URL } from "~/app/config.mjs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-2 flex flex-col gap-3">
      <div className="flex gap-2">
        <Link
          href="/"
          className="py-2 px-4 bg-blue-600 rounded text-white hover:bg-blue-700"
        >
          Home
        </Link>

        <Link
          href="/auth"
          className="py-2 px-4 bg-blue-600 rounded text-white hover:bg-blue-700"
        >
          ReAuth
        </Link>

        <Link
          href={UNIDY_URL}
          className="py-2 px-4 bg-orange-600 rounded text-white hover:bg-orange-700"
        >
          App
        </Link>
      </div>

      {children}
    </div>
  );
}
