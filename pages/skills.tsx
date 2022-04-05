import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import InfoBox, { InfoBoxSymbol } from "../components/InfoBox/InfoBox";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import React, { useEffect, useState } from "react";

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
    forceCheck, // Not implemented
  }: {
    isChecked: boolean;
    forceCheck?: boolean;
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

      <div className="flex gap-3 m-9">
        <div>
          <h1 className="">Skills</h1>
          <p>
            {`I've worked with a wide variety of tech for both personal and professional projects, but my history has a clear emphasis in web development, especially with React and TypeScript.`}
          </p>
        </div>

        <div>
          <InfoBox
            title={`"OMG! Where's your resume?!"`}
            symbol={InfoBoxSymbol.InformationSign}
          >
            <p>{`I don't display a resume to the public due to privacy concerns. If you want one, reach out to me at hi@bananabrann.dev.`}</p>
          </InfoBox>
        </div>
      </div>

      <div>
        <p className=" text-center">
          For an exhaustive list of languages, tools, and buzzwords,{" "}
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
