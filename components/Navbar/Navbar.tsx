import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

export default function Navbar({}: {}) {
  const router: NextRouter = useRouter();

  return (
    <div
      data-cy="navbar"
      className="Navbar bg-stone-800 text-stone-200 p-4 mb-10"
    >
      <div className="flex gap-8 md:text-xl text-upper">
        {/* prettier-ignore */}
        <span
          data-cy="home"
          className={`${router.pathname === "/" ? `text-stone-400` : ""}
                      hover:text-pink-500 transition`}
        >
          <Link href="/" >{`Home`}</Link>
        </span>

        {/* prettier-ignore */}
        <span data-cy="web-services" className={`hover:text-pink-500 transition`}>
          <Link href="/#web-services">{`Service Offerings`}</Link>
        </span>

        {/* prettier-ignore */}
        <span data-cy="skills" className={`${router.pathname === "/skills" ? `text-stone-400` : ""}
                        hover:text-pink-500 transition`}
        >
          <Link href="/skills">{`Skills & Expertise`}</Link>
        </span>

        {/* prettier-ignore */}
        <span data-cy="works" className={`${router.pathname === "/works" ? `text-stone-400` : ""}
                        hover:text-pink-500 transition`}
        >
          <Link href="/works">{`Works & Projects`}</Link>
        </span>
      </div>
    </div>
  );
}
