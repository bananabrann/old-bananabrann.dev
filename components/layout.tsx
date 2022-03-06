import Head from "next/head";
import React, { useState } from "react";
import styles from "./layout.module.scss";

export const defaultSiteTitle =
  "bananabrann - web development and software engineering";

export default function Layout({
  children,
  title,
  home,
}: {
  children: React.ReactNode;
  title?: string;
  home?: boolean;
}) {
  const [siteTitle, setSiteTitle] = useState<string>(title ?? defaultSiteTitle);

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="description" content="Website of bananabrann." />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={`${styles.wrapper}`}>{children}</main>
    </React.Fragment>
  );
}
