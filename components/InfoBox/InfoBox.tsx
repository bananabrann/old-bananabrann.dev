import React from "react";
import styles from "./InfoBox.module.scss";

export enum InfoBoxSymbol {
  QuestionMark,
  InformationSign,
}

function SvgIcon({ iconToUse }: { iconToUse: InfoBoxSymbol }) {
  /**
   * Return the correct svg code for a given icon.
   *
   * For available options, see
   * enum InfoBoxSymbol. Svg code taken from https://heroicons.com/. All
   * credit goes to them, thank you!
   */
  if (iconToUse === InfoBoxSymbol.InformationSign) {
    return (
      // prettier-ignore
      <svg xmlns="http://www.w3.org/2000/svg" className="max-h-20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
      </svg>
    );
  } else if (iconToUse === InfoBoxSymbol.QuestionMark) {
    return (
      // prettier-ignore
      <svg xmlns="http://www.w3.org/2000/svg" className="max-h-20" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
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

export default function InfoBox({
  title,
  symbol,
  children,
  id,
}: {
  title: string;
  symbol: InfoBoxSymbol;
  children: React.ReactNode;
  id?: string;
}) {
  /**
   * NOTE -- Only outline and font is handled in style module. For everything
   * else, use inline Tailwind.
   */
  return (
    <div id={id} className="ContentBox max-w-xl">
      <div className={`${styles.info_box_container} inline-flex h-20 `}>
        <SvgIcon iconToUse={symbol} />
        <h3 className="inline-block self-end">{title}</h3>
      </div>

      <div className={`${styles.info_box_children_container}`}>{children}</div>
    </div>
  );
}
