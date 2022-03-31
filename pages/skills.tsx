import fs from "fs";
import path from "path";
import ContentBox, {
  ContentBoxSymbol,
} from "../components/ContentBox/ContentBox";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

interface SkillsPropsErrorObject {
  code: string;
  message: string;
}

interface SkillsProps {
  techList: Array<string>;
  error?: SkillsPropsErrorObject;
}

export default function Skills({ techList, error }: SkillsProps) {
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

      <div>
        <p>For an exhaustive list of technologies, click here.</p>
        <ul>
          {techList.map((tech) => {
            return <p>{tech}</p>;
          })}
        </ul>
      </div>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const techListFile = "tech.txt";
  const dir = path.resolve("./public", techListFile);
  let techListAlphabetized: Array<string> = [];

  /**
   * Synchronously retrieves and constructs an alphabetized list of
   * technologies.
   */
  try {
    techListAlphabetized = fs.readFileSync(dir).toString().split("\n").sort();

    return {
      props: {
        techList: techListAlphabetized,
      },
    };
  } catch (error: any) {
    /**
     * NOTE -- For a list of common system errors, see
     * https://nodejs.org/api/errors.html#common-system-errors
     */
    const errorObj: SkillsPropsErrorObject = {
      code: error?.code ?? "Unknown",
      message: error?.message ?? error,
    };

    console.error(errorObj.message);

    return {
      props: {
        techList: [],
        error: errorObj,
      },
    };
  }
}
