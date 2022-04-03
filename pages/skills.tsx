import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import ContentBox, {
  ContentBoxSymbol,
} from "../components/ContentBox/ContentBox";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";

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
  const [isSkillsListExpanded, setIsSkillsListExpanded] =
    useState<boolean>(false);

  // prettier-ignore
  let skillsListContent = (
    <div className="px-8 -indent-4 flex justify-evenly mx-auto flex-col gap-8 sm:flex-row ">
      <div className="w-72" >
        <h4 className="mb-2 text-center">Experienced</h4>
        <ul>
          {techList.experienced.map((item: string) => <li className="">• {item}</li>)}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-center">Proficient</h4>
        <ul>
          {techList.proficient.map((item: string) => <li>• {item}</li>)}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-center">Exposure</h4>
        <ul>
          {techList.exposure.map(item => <li>• {item}</li>)}
        </ul>
      </div>
    </div>
  );

  return (
    <Layout title="bananabrann - skills">
      <Navbar />

      <div className="flex gap-3 m-9">
        <div>
          <h1 className="">Skills</h1>
          <p>
            I've done a lot of things in my career. I was a U.S. Marine,
            professional tuba player, and now most recently a software developer
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

      {skillsListContent}

      <Footer />
    </Layout>
  );
}
