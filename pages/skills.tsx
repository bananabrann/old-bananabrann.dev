import ContentBox, {
  ContentBoxSymbol,
} from "../components/ContentBox/ContentBox";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

export default function Skills() {
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

      <Footer />
    </Layout>
  );
}
