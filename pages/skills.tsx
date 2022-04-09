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
import SnippetXdPng from "../res/png/snippet-xd.png";

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
  // prettier-ignore
  const [isSkillsListExpanded, setIsSkillsListExpanded] = useState<boolean>(false);
  const [skills, setSkills] = useState<TechList>(techList);

  /**
   * Handles the toggling of the exhaustive skills/tech list.
   */
  function handleToggleSkillsListExpanded(): void {
    setIsSkillsListExpanded(!isSkillsListExpanded);
  }

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
      <p
        onClick={() => handleToggleSkillsListExpanded()}
        className="text-pink-500 font-bold cursor-pointer text-center"
      >
        Collapse skills list.
      </p>
    </div>
  );

  return (
    <Layout title="bananabrann - skills">
      <Navbar />

      <section className="flex flex-col sm:flex-row justify-around sm:mx-auto">
        <div className="px-4">
          <h2 className="text-4xl text-center sm:text-left">{`Content`}</h2>

          {/* TODO -- Work in progress. */}
          <ul>
            <li className="hover:text-pink-500 transition">
              <Link href="#">{`I. Quick Look`}</Link>
            </li>
            <li className="hover:text-pink-500 transition">
              <Link href="#design">{`II. Design`}</Link>
            </li>
            <li className="hover:text-pink-500 transition">
              <Link href="#">{`III. Develop`}</Link>
            </li>
            <li className="hover:text-pink-500 transition">
              <Link href="#">{`IV. Deploy`}</Link>
            </li>
            <li className="hover:text-pink-500 transition">
              <Link href="#">{`V. Exhaustive list of skills`}</Link>
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
      <section id="design" className="flex mb-36 flex-col-reverse md:flex-row">
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
      </section>

      <div>
        <p className=" text-center">
          {`For an exhaustive list of languages, tools, and buzzwords, `}
          <span
            onClick={() => handleToggleSkillsListExpanded()}
            className="text-pink-500 font-bold cursor-pointer"
          >
            click here.
          </span>
        </p>

        {isSkillsListExpanded ? skillsListHtmlContent : ""}
      </div>

      <Footer />
    </Layout>
  );
}
