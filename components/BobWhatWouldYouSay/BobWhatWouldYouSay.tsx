import BobPng from "../../res/png/bob.png";
import styles from "./BobWhatWouldYouSay.module.scss";

/**
 * NOTE -- The easiest way to edit these SVGs is in Adobe XD. Make your changes,
 * then right-click "Copy SVG code", then paste and tidy it up here.
 * 
 * NOTE -- Parent elements should control size of this component. Keep <svg>
 * `width` property empty so that sizing can be handled by parent.
 * 
 * NOTE -- This file is ignored by Prettier.
 */

export default function BobWhatWouldYouSay() {
  return (
    <div className={styles.BobWhatWouldYouSay}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 1344.651 524">
        <style type="text/css">
          {
            `@font-face {
              font-family: "Hoss Round",
              src: url("https://use.typekit.net/zzs2pgb.css")
            }`
          }
        </style>
        <path id="Polygon_1" data-name="Polygon 1" d="M894.492,33.237l450.159,174.841L101.382,353.559Z" transform="translate(0 36.9)" fill="#b7afa3"/>
        <text id="_What_would_you_say_..._you_do_here_" data-name="&quot;What would you say 
          ... you do here?&quot;" transform="translate(553.663 107)" fill="#333" fontSize="72" fontFamily="HossRound-Bold, Hoss Round, sans-serif" fontWeight="700"><tspan x="0" y="67">&quot;What would you say </tspan><tspan x="0" y="153" xmlSpace="preserve">     ... you do here?&quot;</tspan></text>
        <image id="guy_from_the_clip1" data-name="guy from the clip1" width="462" height="524" transform="translate(144.663)" xlinkHref={BobPng.src} />
      </svg>
    </div>
  );
}
