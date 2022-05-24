import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import LogoGitHubAltSvg from "../../res/svg/logo-github-alt.svg";
import LogoGitHubSquareSvg from "../../res/svg/logo-github-square.svg";
import LogoTwitterSvf from "../../res/svg/logo-twitter.svg";
import FlagUnitedStatesSvg from "../../res/svg/flag-us.svg";

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
        <div
          className={`h-full fixed w-[275px] bg-yellow-300 flex flex-col justify-between py-10 px-2`}
        >
          <div>
            <nav className="font-bold text-xl ml-2">
              {/* prettier-ignore */}
              <ul>
                <li><Link href="/">{`${router.pathname === "/" ? "> $" : "/"} home`}</Link></li>
                <li><Link href="/blog">{`${router.pathname === "/blog" ? "> $" : "/"} blog`}</Link></li>
                <li><Link href="/about">{`${router.pathname === "/about" ? "> $" : "/"} about me`}</Link></li>
                <li><Link href="/skills">{`${router.pathname === "/skills" ? "> $" : "/"} my skills`}</Link></li>
              </ul>
            </nav>

            <div>
              <div className="flex px-20 gap-4 mt-4 hover:cursor-pointer">
                <Link href="https://github.com/bananabrann">
                  <LogoGitHubAltSvg />
                </Link>
                <Link href="https://twitter.com/bananabrannn">
                  <LogoTwitterSvf />
                </Link>
              </div>
            </div>
          </div>

          <footer className="flex flex-col items-center text-center">
            <h4 className="font-bold">hi@bananabrann.dev</h4>
            <p className="text-sm">{`Microsoft-Certified Software Engineer`}</p>
            <p className="text-sm">{`Fairfax, Virginia`}</p>
            <br />
            <FlagUnitedStatesSvg />
            <div className="text-xs mx-auto mt-5 text-center">
              <p>
                {`Website by `}
                <span className="hover:text-cyan-500 transition">
                  <Link href="https://github.com/bananabrann/">
                    @bananabrann (me)
                  </Link>
                </span>
                {`. `}
                <span className="hover:text-cyan-500 transition">
                  <Link href="https://github.com/bananabrann/bananabrann.dev/blob/main/LICENSE">
                    MIT license
                  </Link>
                </span>
                {`, 2022.`}
              </p>

              <p>
                {`"Banana Man" art by `}
                <span className="hover:text-cyan-500 transition">
                  <Link href="https://www.artstation.com/gabemichaelis">
                    Gabe Michaelis
                  </Link>
                </span>
                {`. All rights reserved, 2022.`}
              </p>
            </div>
          </footer>
        </div>

        <main className={`ml-[275px] max-w-4xl p-7 mr-8`}>{children}</main>
      </div>
    </React.Fragment>
  );
}
