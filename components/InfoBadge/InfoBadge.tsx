import React, { useState } from "react";

export enum InfoBadgeSymbol {
  BarChart,
  ClipboardWithCheck,
  IdBadge,
}

function SvgIcon({ iconToUse }: { iconToUse: InfoBadgeSymbol }) {
  /**
   * Return the correct svg code for a given icon.
   *
   * For available options, see enum InfoBadgeSymbol. Svg code taken from
   * https://heroicons.com/. All credit goes to them, thank you!
   */
  if (iconToUse === InfoBadgeSymbol.IdBadge) {
    return (
      // prettier-ignore
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    );
  } else if (iconToUse === InfoBadgeSymbol.BarChart) {
    return (
      // prettier-ignore
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    );
  } else if (iconToUse === InfoBadgeSymbol.ClipboardWithCheck) {
    return (
      // prettier-ignore
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    );
  } else {
    /**
     * An icon was given but did not match anything known.
     *
     * This is unlikely to occur dynamically in run-time. Check the source code
     * for proper use of how this function is called.
     */
    console.error("A request for an Svg icon in ContentBox had an unknown input."); // prettier-ignore

    return <h4 className="font-bold text-red-700">404</h4>;
  }
}

export default function InfoBadge({
  title,
  symbol,
  id,
  children,
}: {
  title: string;
  symbol: InfoBadgeSymbol;
  id?: string;
  children?: React.ReactNode;
}) {
  /**
   * If an id isn't provided, generate a unique ID. Because we don't need this
   * to be cryptographically secure, we can do this without importing a package.
   */
  const [uniqueId] = useState<string>(Math.random().toString(26).slice(2));

  return (
    <div id={id ?? uniqueId} className="m-3 flex items-center">
      <SvgIcon iconToUse={symbol} />

      <div className="ml-2">
        <h4 className="text-xl font-bold -mb-4">{title}</h4>
        {children}
      </div>
    </div>
  );
}
