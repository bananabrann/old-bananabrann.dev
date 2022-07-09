import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import LogoGitHubAltSvg from "../../res/svg/logo-github-alt.svg";
import LogoGitHubSquareSvg from "../../res/svg/logo-github-square.svg";
import LogoTwitterSvf from "../../res/svg/logo-twitter.svg";
import FlagUnitedStatesSvg from "../../res/svg/flag-us.svg";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export const defaultSiteTitle =
  "bananabrann - web development and software engineering";

export default function Layout({
  children,
  sideNav,
  title,
  home,
}: {
  children: React.ReactNode;
  sideNav?: boolean;
  title?: string;
  home?: boolean;
}) {
  const [siteTitle, setSiteTitle] = useState<string>(title ?? defaultSiteTitle);
  const router: NextRouter = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  function toggleIsMobileNavOpen() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  const navigationElement = (
    <React.Fragment>
      <div>
        <div
          className="sm:hidden fixed w-12 top-3 right-3"
          onClick={() => toggleIsMobileNavOpen()}
        >
          <XIcon />
        </div>
        <nav className="font-bold ml-2 text-4xl sm:text-2xl">
          {/* prettier-ignore */}
          <ul>
            <li className="transition hover:text-pink-400"><Link href="/">{`${router.pathname === "/" ? "> $" : "/"} home`}</Link></li>
            <li className="transition hover:text-pink-400"><Link href="/about">{`${router.pathname === "/about" ? "> $" : "/"} about me`}</Link></li>
            <li className="transition hover:text-pink-400"><Link href="/skills">{`${router.pathname === "/skills" ? "> $" : "/"} my skills`}</Link></li>
          </ul>
        </nav>

        <div>
          <div className="flex justify-around mt-4 hover:cursor-pointer h-16 sm:h-12">
            <Link href="https://github.com/bananabrann" passHref>
              <LogoGitHubAltSvg />
            </Link>
            <Link href="https://twitter.com/bananabrann" passHref>
              <LogoTwitterSvf />
            </Link>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center text-center">
        <h4 className="font-bold">hi@bananabrann.dev</h4>
        <p className="text-sm">{`Software Engineer`}</p>
        <br />
        <FlagUnitedStatesSvg />
        <div className="text-xs mx-auto mt-6 text-center">
          <p>
            {`Website by `}
            <span className="hover:text-pink-400 transition">
              <Link href="https://github.com/bananabrann/">{`@bananabrann (me)`}</Link>
            </span>
            {`. `}
            <span className="hover:text-pink-400 transition">
              <Link href="https://github.com/bananabrann/bananabrann.dev/blob/main/LICENSE">{`MIT license`}</Link>
            </span>
            {`, 2022.`}
          </p>

          <p>
            {`"Banana Man" art by `}
            <span className="hover:text-pink-400 transition">
              <Link href="https://www.artstation.com/gabemichaelis">
                Gabe Michaelis
              </Link>
            </span>
            {`. All rights reserved, 2022.`}
          </p>
        </div>
      </footer>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <link rel="stylesheet" href="https://use.typekit.net/zzs2pgb.css" />
        <meta name="description" content="Website of bananabrann." />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex">
        {/* Left-side nav for desktop */}
        <div
          className={`z-10 ${
            isMobileNavOpen ? "flex" : "hidden"
          } sm:flex h-full fixed w-screen sm:w-[275px] bg-yellow-300 flex-col justify-between py-10 px-2`}
        >
          {navigationElement}
        </div>

        {/* Top bar nav for mobile */}
        <div className="sm:hidden absolute bg-yellow-300 w-full flex justify-between p-3">
          <Link href="/">
            <span className="w-12">
              <HomeIcon />
            </span>
          </Link>
          <span className="w-12" onClick={() => toggleIsMobileNavOpen()}>
            <MenuAlt3Icon />
          </span>
        </div>

        {/* Content */}
        <main
          className={`sm:ml-[275px] mt-24 sm:mt-2 max-w-4xl p-3 sm:p-7 sm:mr-8`}
        >
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}
