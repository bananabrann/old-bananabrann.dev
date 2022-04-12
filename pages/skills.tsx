import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfoBadge, { InfoBadgeSymbol } from "../components/InfoBadge/InfoBadge";
import BananaManPaintingPng from "../res/png/bananaman-painting.png";
import BananaManEngineerPng from "../res/png/bananaman-engineer.png";
import BananaManRocket from "../res/png/bananaman-rocket.png";
import SnippetXdPng from "../res/png/snippet-xd.png";
import SnippetCodePng from "../res/png/snippet-code.png";
import ExperienceVisualizedCharts from "../components/ExperienceVisualizedCharts/ExperienceVisualizedCharts";
import ChartsHostingProviders from "../components/ChartsHostingProviders/ChartsHostingProviders";
import ChartsCiCdProviders from "../components/ChartsCiCdProviders/ChartsCiCdProviders";

type TechList = {
  experienced: Array<string>;
  proficient: Array<string>;
  exposure: Array<string>;
};

export async function getStaticProps() {
  /**
   * NOTE -- The "skills (or 'tech') list" is an exhaustive list of skills and
   * technologies that I am familiar with. It is used on the 'skills' page of
   * bananabrann.dev.
   * To ease the burden of updating my skills displayed on my website, I have
   * my website read the and alphabetize the list from a yaml file.
   *
   * Construct the path to the skills list.
   */
  const techListFileName = "tech.yaml";
  const techListFileFullPath = path.resolve("./public", techListFileName);

  try {
    /**
     * Synchronously retrieve the skills list.
     */
    let techListRaw: TechList = yaml.load(
      fs.readFileSync(path.resolve("./public", techListFileFullPath), "utf-8")
    ) as TechList;

    /**
     * Alphabetize tech list.
     */
    const techListAlphabetized: TechList = {
      experienced: techListRaw.experienced.sort(),
      proficient: techListRaw.proficient.sort(),
      exposure: techListRaw.exposure.sort(),
    };

    /**
     * Send the results to the component.
     */
    return {
      props: {
        techList: techListAlphabetized,
      },
    };
  } catch (error: any) {
    /**
     * Handle errors that may occur from reading the skills list file.
     *
     * NOTE -- For a list of common system errors and their codes, see
     * https://nodejs.org/api/errors.html#common-system-errors
     *
     * TODO -- Implement YAMLException from js-yaml.
     */
    console.error(error?.message ?? error);
    const errorMessage = `[ ${error?.code} ] Uh-oh, this doesn't peel right.`;

    return {
      props: {
        techList: {
          experienced: [errorMessage],
          proficient: [errorMessage],
          exposure: [errorMessage],
        } as TechList,
      },
    };
  }
}

export default function Skills({ techList }: { techList: TechList }) {
  const [skills, setSkills] = useState<TechList>(techList);

  /**
   * Adds and removes bullet points on items (a string) in the skills list,
   * based on the boolean that it is given.
   */
  function handleSkillsListItemBullets({
    isChecked,
  }: {
    isChecked: boolean;
  }): void {
    if (!isChecked) {
      setSkills({
        experienced: techList.experienced.map((x) => "• " + x),
        proficient: techList.proficient.map((x) => "• " + x),
        exposure: techList.exposure.map((x) => "• " + x),
      });
    } else {
      setSkills({
        ...techList,
      });
    }
  }

  useEffect(() => {
    handleSkillsListItemBullets({ isChecked: false });
  }, []);

  let skillsListHtmlContent = (
    <div className="px-8 m-5">
      <div className="mb-7">
        <input
          type="checkbox"
          id="skills-list-hide-item-bullets"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const isChecked = e.currentTarget.checked;
            handleSkillsListItemBullets({ isChecked });
          }}
        />
        <label
          htmlFor="skills-list-hide-item-bullets"
          className="pl-2 cursor-pointer"
        >
          Hide bullets
        </label>
      </div>

      <div className="-indent-4 flex justify-between mx-auto flex-col gap-8 sm:flex-row ">
        <div>
          <h4 className="mb-2 text-center">Experienced</h4>
          <ul>
            {skills.experienced.map((item: string) => {
              return <li key={`full-skills-list-item-${item}`}>{item}</li>;
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-center">Proficient</h4>
          <ul>
            {skills.proficient.map((item: string) => {
              return <li key={`full-skills-list-${item}`}>{item}</li>;
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-center">Exposure</h4>
          <ul>
            {skills.exposure.map((item: string) => {
              return <li key={`full-skills-list-${item}`}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <Layout title="bananabrann - skills">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <section className="flex flex-col sm:flex-row justify-around sm:mx-auto">
          <div className="px-4">
            <h2 className="text-4xl text-center sm:text-left">{`Content`}</h2>

            {/* SECTION -- Table of contents */}
            {/* TODO -- Work in progress. */}
            <ul>
              <li className="hover:text-pink-500 transition">
                <Link href="#">{`I. Quick Look`}</Link>
              </li>
              <li className="hover:text-pink-500 transition">
                <Link href="#design">{`II. Design`}</Link>
              </li>
              <li className="hover:text-pink-500 transition pl-8">
                <Link href="#design-philosophy">{`a. My design philosophy`}</Link>
              </li>
              <li className="hover:text-pink-500 transition">
                <Link href="#develop">{`III. Develop`}</Link>
              </li>
              <li className="hover:text-pink-500 transition">
                <Link href="#experienced-visualized">{`III. Develop`}</Link>
              </li>
              <li className="hover:text-pink-500 transition">
                <Link href="#deploy">{`IV. Deploy`}</Link>
              </li>
              <li className="hover:text-pink-500 transition">
                <Link href="#list">{`V. Exhaustive list of skills`}</Link>
              </li>
            </ul>
          </div>

          <div className="px-4">
            <h2 className="text-4xl text-center sm:text-left">{`Quick Look`}</h2>

            <InfoBadge title="Most-used tech" symbol={InfoBadgeSymbol.BarChart}>
              <p>{`TypeScript, React, Next`}</p>
            </InfoBadge>
            <InfoBadge title="Gov stuff" symbol={InfoBadgeSymbol.IdBadge}>
              <p>{`Ask me how trustworthy I am`}</p>
            </InfoBadge>
            {/* prettier-ignore */}
            <InfoBadge title="Certification" symbol={InfoBadgeSymbol.ClipboardWithCheck}>
            <p>{`Microsoft AZ-204 Azure Developer Associate`}</p>
          </InfoBadge>
            {/* prettier-ignore */}
            <InfoBadge title="Certification" symbol={InfoBadgeSymbol.ClipboardWithCheck}> 
            <p>{`ITIL 4 Foundation in IT Service Management`}</p>
          </InfoBadge>
          </div>
        </section>

        <br />

        {/* SECTION -- Design */}
        <section id="design">
          <div className="flex mb-4 flex-col-reverse md:flex-row md:mb-20">
            <div className="p-4 md:w-5/6">
              <h2 className="mt-12 md:m-0">Design</h2>
              <p className="py-2 ">{`When I fulfill a design role, my goal is to provide a clear, familiar, and consistent design that gives the most to the users.`}</p>
              <p className="py-2 ">{`I make use of Adobe PhotoShop for creating and editing web assets, and Adobe XD (and sometimes Figma) for creating wireframes and design drafts.`}</p>
              <p className="py-2 ">{`Already have a designer? No problem. I don't always have to be the designer. In fact, for most of my career I have not held a design role, instead building the designer's visions.`}</p>
            </div>

            <div className="w-full relative">
              <div className="relative z-50 bottom-0 md:-bottom-7 md:-left-16">
                <Image
                  src={BananaManPaintingPng}
                  alt=""
                  title=""
                  quality={0}
                  priority={true}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="absolute top-0">
                <Image
                  src={SnippetXdPng}
                  alt=""
                  title=""
                  quality={0}
                  priority={true}
                />
              </div>
            </div>
          </div>

          <div id="design-philosophy" className="flex flex-col items-center ">
            <h3>My Design Philosophy</h3>

            <div className="w-full max-w-2xl p-6">
              {/* 
              NOTE -- The easiest way to edit this SVG is to open it in Adobe XD.
              Make your adjustments, then right-click, "Save as SVG", and paste
              here.

              NOTE -- Edit <svg> `width` prop to adjust size.
            */}
              {/* TODO -- This is ugly, it should probably be its own component. */}

              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 1265.025 680.008">
              {/* prettier-ignore */}
              <path id="Path_14" data-name="Path 14" d="M36.1,78.243h.05M16.032,93.292h40.13A10.032,10.032,0,0,0,66.194,83.259V13.032A10.032,10.032,0,0,0,56.162,3H16.032A10.032,10.032,0,0,0,6,13.032V83.259A10.032,10.032,0,0,0,16.032,93.292Z" transform="translate(42.593 378.083)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
              {/* prettier-ignore */}
              <path id="Path_15" data-name="Path 15" d="M83.089,90.495h27.03V79.683A16.218,16.218,0,0,0,81.164,69.644m1.924,20.851H29.03m54.059,0V79.683a26.935,26.935,0,0,0-1.925-10.039M29.03,90.495H2V79.683A16.218,16.218,0,0,1,30.954,69.644M29.03,90.495V79.683a26.935,26.935,0,0,1,1.925-10.039m0,0a27.04,27.04,0,0,1,50.21,0M72.277,20.218A16.218,16.218,0,1,1,56.059,4,16.218,16.218,0,0,1,72.277,20.218Zm32.436,16.218A10.812,10.812,0,1,1,93.9,25.624,10.812,10.812,0,0,1,104.713,36.436Zm-75.683,0A10.812,10.812,0,1,1,18.218,25.624,10.812,10.812,0,0,1,29.03,36.436Z" transform="translate(15.907 543.128)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
              {/* prettier-ignore */}
              <path id="Path_17" data-name="Path 17" d="M31.261,100.112H68.026a10.65,10.65,0,0,0,10.5-10.79V37.6a5.47,5.47,0,0,0-1.538-3.814L48.556,4.581A5.183,5.183,0,0,0,44.843,3H15.5A10.65,10.65,0,0,0,5,13.79V73.137m0,26.976L30.625,73.789m0,0a15.462,15.462,0,0,0,22.283,0,16.5,16.5,0,0,0,0-22.89,15.463,15.463,0,0,0-22.283,0,16.5,16.5,0,0,0,0,22.89Z" transform="translate(30.2 187.297)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
              {/* prettier-ignore */}
              <path id="Path_19" data-name="Path 19" d="M6.45,8.452a15.2,15.2,0,0,1,21.488,0L32.391,12.9l4.453-4.449a15.2,15.2,0,1,1,21.49,21.49L32.391,55.885,6.45,29.941a15.2,15.2,0,0,1,0-21.488Z" transform="translate(15.906 396.287)" fillRule="evenodd"/>
              {/* prettier-ignore */}
              <path id="Path_20" data-name="Path 20" d="M118.8,31.7,61.4,3,4,31.7m114.8,0L61.4,60.4m57.4-28.7v71.751l-57.4,28.7m0-71.751L4,31.7M61.4,60.4v71.751M4,31.7v71.751l57.4,28.7" transform="translate(0.025)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"/>
              {/* prettier-ignore */}
              <path id="Path_22" data-name="Path 22" d="M11.722,2A9.722,9.722,0,0,0,2,11.722V65.194a14.583,14.583,0,0,0,29.167,0V11.722A9.722,9.722,0,0,0,21.444,2Zm4.861,68.055a4.861,4.861,0,1,0-4.861-4.861A4.861,4.861,0,0,0,16.583,70.055Zm24.305-8.541L64.708,37.695a9.722,9.722,0,0,0,0-13.747L57.83,17.069a9.722,9.722,0,0,0-13.747,0l-3.194,3.194ZM70.055,79.777H36.373L65.539,50.611h4.516a9.722,9.722,0,0,1,9.722,9.722v9.722A9.722,9.722,0,0,1,70.055,79.777Z" transform="translate(90.025 55.374)" fillRule="evenodd"/>
              {/* prettier-ignore */}
              <text id="The_user_must_know_how_to_do_the_thing_they_came_for_within_5_seconds." data-name="The user must know how to do the thing they came for within 5 seconds." transform="translate(296.025 197.008)" fill="#333" fontSize="40" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="38">The user must know how to do the thing they </tspan><tspan x="0" y="86">came for within 5 seconds.</tspan></text>
              {/* prettier-ignore */}
              <text id="This_is_the_21st_century._New_websites_must_be_mobile_and_desktop_friendly._" data-name="This is the 21st century. New websites must be mobile and desktop friendly.
            " transform="translate(287.025 381.008)" fill="#333" fontSize="40" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="38">This is the 21st century. New websites must be mobile </tspan><tspan x="0" y="86" fontFamily="Quasimoda-Italic, Quasimoda" fontStyle="italic">and </tspan><tspan y="86">desktop friendly.</tspan><tspan x="0" y="134"></tspan></text>
              {/* prettier-ignore */}
              <text id="To_make_good_design_decisions_a_clear_understanding_of_who_your_audience_is_and_why_they_use_your_website_is_required." data-name="To make good design decisions, a clear understanding of who your audience is and why they use your website is required." transform="translate(287.025 536.008)" fill="#333" fontSize="40" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="38">To make good design decisions, a clear understanding </tspan><tspan x="0" y="86">of who your audience is and why they use your website </tspan><tspan x="0" y="134">is required.</tspan></text>
              {/* prettier-ignore */}
              <text id="If_you_have_to_explain_the_design_it_s_bad_design._" data-name="If you have to explain the design, it&apos;s bad design.
            " transform="translate(287.025 62.008)" fill="#333" fontSize="40" fontFamily="Quasimoda-Regular, Quasimoda"><tspan x="0" y="38">If you have to explain the design, it&apos;s bad design.</tspan><tspan x="0" y="86"></tspan></text>
            </svg>
            </div>
          </div>
        </section>

        <section id="develop">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full mb-28">
              <div className="relative z-50 -bottom-28">
                <Image
                  src={BananaManEngineerPng}
                  alt=""
                  title=""
                  quality={0}
                  priority={false}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="absolute top-0">
                <Image
                  src={SnippetCodePng}
                  alt=""
                  title=""
                  quality={0}
                  priority={false}
                />
              </div>
            </div>

            <div className="w-5/6">
              <h2>Develop</h2>
              <p>
                {`The bread and butter of my career: coding. I've used lots of languages and tools during my career, everything from classic Java desktop apps to API gateway plugins in Lua. However, most of my work nowadays is `}
                <b>modern web development.</b>
              </p>

              <br />

              <div className="text-center text-2xl font-bold flex flex-col gap-6">
                <p className="">
                  Developer on large, multi-million dollar enterprise web apps
                  that server 10,000+ monthly users
                </p>
                <p>
                  Lead developer for smaller web apps with 100+ users a month
                </p>
                <p>Built a robot that detects and displays decibels</p>
                <p>{`A video game that maybe one day I'll finish... 😬`}</p>
              </div>

              <p className="mt-8 text-center">
                {`To see some projects, `}
                <span className="font-bold text-pink-500">
                  <Link href="/works">visit my works page.</Link>
                </span>
              </p>
            </div>
          </div>

          <div id="experienced-visualized">
            <h3>Experience, visualized</h3>

            <div className="max-w-3xl mx-auto">
              <ExperienceVisualizedCharts />
            </div>
          </div>
        </section>

        <section id="deploy" className="mb-12">
          <div className="flex flex-col sm:flex-row">
            <div className="p-6 flex flex-col gap-4">
              <h2>Deploy</h2>
              <p>{`Deployment makes the world go round and developers to lose their hair. Whether it's copy-and-pasting your index.html onto a shared server, or a complex container orchestration that deploys globally, deployment processes are critical to the success of your product.`}</p>
              <p>{`I've deployed all sizes of web applications, building both build and release pipelines that deploy code and provision infrastructure.`}</p>
            </div>
            <Image src={BananaManRocket} alt="" />
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <ChartsHostingProviders />
            <ChartsCiCdProviders />
          </div>

          <p className="text-center text-xs">
            {`Pie charts by `}
            <a
              className="hover:text-pink-500 transition"
              href="https://www.meta-chart.com/"
            >
              meta-chart.com
            </a>
          </p>
        </section>

        <section id="list" className="p-6">
          <h2>{`Exhaustive list of skills`}</h2>
          <p>{`Languages, tools, frameworks, buzzwords, and everything in between. Grouped by experience. Sorted alphabetically.`}</p>
          {skillsListHtmlContent}
        </section>
      </div>

      <Footer />
    </Layout>
  );
}
