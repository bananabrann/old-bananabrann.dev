import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

export default function Navbar({}: {}) {
  const router: NextRouter = useRouter();

  return (
    <div className="Navbar bg-stone-800 text-stone-200 p-4 mb-10">
      <div className="flex gap-8 md:text-xl text-upper">
        {/* prettier-ignore */}
        <span
          className={`${router.pathname === "/" ? `text-stone-400` : ""}
                      hover:text-pink-500 transition`}
        >
          <Link href="/">{`Home`}</Link>
        </span>

        {/* prettier-ignore */}
        <span className={`hover:text-pink-500 transition`}>
          <Link href="/#web-services">{`Service Offerings`}</Link>
        </span>

        {/* prettier-ignore */}
        <span className={`${router.pathname === "/skills" ? `text-stone-400` : ""}
                        hover:text-pink-500 transition`}
        >
          <Link href="/skills">{`Skills & Expertise`}</Link>
        </span>

        {/* prettier-ignore */}
        <span className={`${router.pathname === "/works" ? `text-stone-400` : ""}
                        hover:text-pink-500 transition`}
        >
          <Link href="/">{`Works & Projects`}</Link>
        </span>
      </div>
    </div>
  );
}
