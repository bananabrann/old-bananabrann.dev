import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import ContentBox, {
  ContentBoxSymbol,
} from "../components/ContentBox/ContentBox";
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
   * Construct what the path looks like.
   */
  const techListFileName = "tech.yaml";
  const techListFileFullPath = path.resolve("./public", techListFileName);

  try {
    /**
     * Synchronously retrieve and tech list.
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
     * Return the results as props.
     */
    return {
      props: {
        techList: techListAlphabetized,
      },
    };
  } catch (error: any) {
    /**
     * Handle errors that may occur from reading the tech list.
     *
     * TODO -- Implement YAMLException from js-yaml.
     */

    console.error(error?.message ?? error);

    /**
     * NOTE -- For a list of common system errors and their codes, see
     * https://nodejs.org/api/errors.html#common-system-errors
     */
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

  function handleToggleSkillsListExpanded() {
    setIsSkillsListExpanded(!isSkillsListExpanded);
  }

  function handleSkillsListItemBullets({
    isChecked,
    forceCheck, // Not implemented
  }: {
    isChecked: boolean;
    forceCheck?: boolean;
  }) {
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
            {`I've done a lot of things in my career. I was a U.S. Marine,
            professional tuba player, and now most recently a software developer`}
          </p>
        </div>

        <div>
          <ContentBox
            title={`"OMG! Where's your resume?!"`}
            symbol={ContentBoxSymbol.InformationSign}
          >
            <p>{`I don't display a resume to the public due to privacy concerns. If you want one, reach out to me at hi@bananabrann.dev.`}</p>
          </ContentBox>
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
