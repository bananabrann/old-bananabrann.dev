import TechBarTimePng from "../../res/png/tech-bar-time.png";
import TechBarLangsPng from "../../res/png/tech-bar-langs.png";
import TechBarToolsPng from "../../res/png/tech-bar-tools.png";
import Image from "next/image";
import { Fragment } from "react";

/**
 * NOTE -- The easiest way to edit these SVGs is to open it in Adobe XD. Make
 * your changes, then right-click "Copy SVG code", then paste it here.
 * 
 * NOTE -- Parent elements should control size of this component. Keep <svg>
 * `width` property empty so that sizing can be handled by parent.
 * 
 * NOTE -- This file is ignored by Prettier.
 */
export default function ExperienceVisualizedCharts() {
  return(
    <Fragment>
      <div className="py-6">
        <h4>Work Type</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 1336 53">
          <circle id="Ellipse_1" data-name="Ellipse 1" cx="12.5" cy="12.5" r="12.5" transform="translate(0 17)" fill="#dbb227"/>
          <text id="Coding_for_web_development" data-name="Coding for
        web development" transform="translate(34 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Coding for</tspan><tspan x="0" y="24">web development</tspan></text>
          <circle id="Ellipse_2" data-name="Ellipse 2" cx="12.5" cy="12.5" r="12.5" transform="translate(294 17)" fill="#b72025"/>
          <text id="CI_CD_DevOps" data-name="CI/CD &amp; DevOps" transform="translate(328 12)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="23">CI/CD &amp; DevOps</tspan></text>
          <circle id="Ellipse_3" data-name="Ellipse 3" cx="12.5" cy="12.5" r="12.5" transform="translate(628 17)" fill="#d58fbe"/>
          <text id="Web_design" data-name="Web design" transform="translate(665 38)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Web design</tspan></text>
          <circle id="Ellipse_4" data-name="Ellipse 4" cx="12.5" cy="12.5" r="12.5" transform="translate(896 17)" fill="#673f97"/>
          <text id="Electrical_engineering" data-name="Electrical engineering" transform="translate(933 38)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Electrical engineering</tspan></text>
          <circle id="Ellipse_5" data-name="Ellipse 5" cx="12.5" cy="12.5" r="12.5" transform="translate(1234 17)" fill="#747474"/>
          <text id="Other" transform="translate(1271 36)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Other</tspan></text>
        </svg>
        <Image src={TechBarTimePng} alt="" layout="responsive" quality={100} />
      </div>

      <h4>Languages</h4>
      <div className="py-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 1337 31">
          <circle id="Ellipse_6" data-name="Ellipse 6" cx="12.5" cy="12.5" r="12.5" transform="translate(0 4)" fill="#2b7489"/>
          <text id="JavaScript_TypeScript" data-name="JavaScript &amp; TypeScript" transform="translate(34 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">JavaScript &amp; TypeScript</tspan></text>
          <circle id="Ellipse_7" data-name="Ellipse 7" cx="12.5" cy="12.5" r="12.5" transform="translate(353 4)" fill="#c6538c"/>
          <text id="CSS_SASS" data-name="CSS &amp; SASS" transform="translate(387 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">CSS &amp; SASS</tspan></text>
          <circle id="Ellipse_8" data-name="Ellipse 8" cx="12.5" cy="12.5" r="12.5" transform="translate(618 4)" fill="#e4910b"/>
          <text id="SQL" transform="translate(652 25)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">SQL</tspan></text>
          <circle id="Ellipse_9" data-name="Ellipse 9" cx="12.5" cy="12.5" r="12.5" transform="translate(797 4)" fill="#89e051"/>
          <text id="Bash" transform="translate(831 25)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Bash</tspan></text>
          <circle id="Ellipse_10" data-name="Ellipse 10" cx="12.5" cy="12.5" r="12.5" transform="translate(954 4)" fill="#274c6d"/>
          <text id="GDScript" transform="translate(988 25)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">GDScript</tspan></text>
          <circle id="Ellipse_11" data-name="Ellipse 11" cx="12.5" cy="12.5" r="12.5" transform="translate(1143 4)" fill="#747474"/>
          <text id="Everything_else" data-name="Everything else" transform="translate(1177 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Everything else</tspan></text>
        </svg>
        <Image src={TechBarLangsPng} alt="" layout="responsive" quality={100} />
      </div>

      <h4>Web Frameworks</h4>
      <div className="py-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 1300 29">
          <circle id="Ellipse_12" data-name="Ellipse 12" cx="12.5" cy="12.5" r="12.5" transform="translate(0 4)" fill="#5ed3f3"/>
          <text id="React" transform="translate(34 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">React</tspan></text>
          <circle id="Ellipse_13" data-name="Ellipse 13" cx="12.5" cy="12.5" r="12.5" transform="translate(541 4)"/>
          <text id="Next.js" transform="translate(575 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Next.js</tspan></text>
          <circle id="Ellipse_14" data-name="Ellipse 14" cx="12.5" cy="12.5" r="12.5" transform="translate(826 4)" fill="#dfc94d"/>
          <text id="Express" transform="translate(860 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Express</tspan></text>
          <circle id="Ellipse_15" data-name="Ellipse 15" cx="12.5" cy="12.5" r="12.5" transform="translate(1106 4)" fill="#747474"/>
          <text id="Everything_else" data-name="Everything else" transform="translate(1140 23)" fill="#333" fontSize="24" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="0">Everything else</tspan></text>
        </svg>
        <Image src={TechBarToolsPng} alt="" layout="responsive" quality={100} />
      </div>
    </Fragment>
  )
}
