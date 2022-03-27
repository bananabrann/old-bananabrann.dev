import Layout from "../components/Layout/Layout";
import BananamanStanding from "../components/BananamanStanding/BananamanStanding";
import BobWhatWouldYouSay from "../components/BobWhatWouldYouSay/BobWhatWouldYouSay";
import ContentBlockOutline from "../components/ContentBlockOutline/ContentBlockOutline";

/*
  NOTE 
  For an example of using types with getStaticProps and other stuff, see
  https://github.com/vercel/next-learn/blob/master/basics/typescript-final/pages/index.tsx
  and
  https://nextjs.org/learn/excel/typescript/nextjs-types
*/

export default function Home() {
  return (
    <Layout home={true}>
      <div className="hero flex-col">
        <div className="md:flex justify items-center">
          <BananamanStanding priority={true} />

          <div className="flex-col px-10">
            <h1 className="text-7xl font-bold ">Succeed with your software</h1>
            <br />
            <p className="text-3xl">
              {`Whether it's a new IT system from scratch, or a touch-up on your
              website, I'm here to help you succeed online.`}
            </p>
            <br />
            <p className="text-3xl">{`When you're ready, email me at `}</p>
            <h3 className="text-4xl font-bold">hi@bananabrann.dev</h3>
          </div>
        </div>
      </div>

      <BobWhatWouldYouSay />

      <ContentBlockOutline title="Web Services">
        <div>
          <h3>Create a new website</h3>
          <p>
            Get you setup with a new, modern website or web app ready to handle
            whatever you need it to. I'll architect, design, build, and deploy
            something that fits your needs.
          </p>
        </div>

        <div>
          <h3>Work on existing site</h3>
          <p>
            Site running slow? Something broken? Want something added? Let's
            work on your existing site or app to make it better. Please note
            that the effectiveness of the changes greatly depends on your
            existing site.
          </p>
        </div>

        <div>
          <h3>Setup a custom email</h3>
          <p>
            Elevate your online presence with a custom email, like
            Sarah@MyCompany.com for you or your business.
          </p>
        </div>

        <div>
          <h3>Implement your software</h3>
          <p>
            Setting up existing software can be tough. I'll take the stress out
            of setting up your cloud infrastructure so you can get back to the
            most important part: running your business.
          </p>
        </div>

        <div>
          <h3>Improve your Google searches</h3>
          <p>
            Optimizing your website to be discovered by customers on Google is a
            big deal in the 21st century. Let's take a look at your existing
            website, and see what can be done to improve your searches.
          </p>
        </div>
      </ContentBlockOutline>
    </Layout>
  );
}
