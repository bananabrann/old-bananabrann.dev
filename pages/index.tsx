import Layout from "../components/Layout/Layout";
import BananamanSuit from "../components/BananamanSuit/BananamanSuit";
import BananamanStanding from "../components/BananamanStanding/BananamanStanding";
import BobWhatWouldYouSay from "../components/BobWhatWouldYouSay/BobWhatWouldYouSay";
import ContentBlockOutline from "../components/ContentBlockOutline/ContentBlockOutline";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import NotReadyYetBanner from "../components/NotReadyYetBanner/NotReadyYetBanner";
import ContentBlock from "../components/ContentBlock/ContentBlock";

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
      <Navbar />

      <div className="hero flex-col mb-4">
        <div className="md:flex justify items-center">
          <BananamanStanding priority={true} />

          <div className="flex-col px-10">
            <h1>Succeed with your software</h1>
            <br />
            <p className="text-2xl">{`Whether it's a new IT system from scratch, or a touch-up on your website, I'm here to help you succeed online.`}</p>
            <br />
            <p className="text-2xl">{`Email me at `}</p>
            <h3 className="text-3xl font-bold">hi@bananabrann.dev</h3>
          </div>
        </div>
      </div>

      <BobWhatWouldYouSay />

      <br />
      <br />

      <ContentBlockOutline id="web-services" title="Web Services">
        <div>
          <h3>{`Create a new website`}</h3>
          <p>{`A new, modern custom website or web app ready to handle whatever you need it to. I'll architect, design, build, and deploy something that fits your needs.`}</p>
          <p className="my-1">{`$36/hr †`}</p>
        </div>

        <div>
          <h3>{`Work on existing site`}</h3>
          <p>{`Site running slow? Something broken? Want something added? Let's work on your existing site or app to make it better. Please note that the effectiveness of the changes greatly depends on your existing site.`}</p>
          <p className="my-1">{`$43/hr †`}</p>
        </div>

        <div>
          <h3>{`Setup a custom email`}</h3>
          <p>{`Elevate your online presence with a custom email, like Sarah@MyCompany.com for you or your business.`}</p>
          <p className="my-1">{`$125 once`}</p>
          <p className="text-sm">{`Price does not include any one-time or reoccurring costs from the service provider you choose. e.g., Google, Yahoo, etc.`}</p>
        </div>

        <div>
          <h3>{`Implement your software`}</h3>
          <p>{`Already have a solution, and just need to deploy it? Setting up existing software can be tough. I'll take the stress out of setting up your cloud infrastructure so you can get back to the most important part: using it.`}</p>
          <p className="my-1">{`$36/hr`}</p>
        </div>

        <div>
          <h3>{`Improve your Google searches`}</h3>
          <p>{`Optimizing your website to be discovered by customers on Google is a big deal in the 21st century. Let's take a look at your existing website, and see what can be done to improve your searches.`}</p>
          <p className="my-1">{`$31/hr`}</p>
        </div>

        <div>
          <h3>{`Chat bots and other`}</h3>
          <p>{`Though web is my specialty, I also have experience with chat bots (like for Slack and Discord) and workflow automation scripting. Really, just ask me!`}</p>
          <p className="my-1">{`$31-$41/hr`}</p>
        </div>
      </ContentBlockOutline>

      <ContentBlock>
        <p className="text-sm">{`† Total hours can vary wildly project-to-project. Reach out to me for a free quote.`}</p>
        <p className="text-sm">{`• Unless a deposit is paid upfront or a service agreement/contact signed, prices are subject to change.`}</p>
        <p className="text-sm">{`• Discounts available for registered non-profits, entities dealing with the education sector, and organizations assisting U.S. military veterans.`}</p>
      </ContentBlock>

      <br />

      <ContentBlockOutline title="Consultations">
        <div>
          <h3>{`Text consultation`}</h3>
          <p>{`Ask me anything via email or Discord. I'm happy to read and respond to questions you might have about any of my services or your own problems. And like your uncle at Thanksgiving, I'm happy to give you my advice.`}</p>
          <p className="my-1">{`Free!`}</p>
        </div>

        <div>
          <h3>{`Consultation`}</h3>
          <p>{`I'll take time to learn your specific problem and offer situational advice and technical recommendations to guide you and your team to success for as long or little as you want. I can also do developer-related administrative stuff, like vetting potential new hires or guiding your software dev interns. I mean, really, this is super broad.`}</p>
          <p className="my-1">{`$18 per 30min`}</p>
        </div>

        <div>
          <h3>{`IT/tech support`}</h3>
          <p>{`I do not offer an IT support service right now. Support for websites I created is included, and other support-like work will be considered a consultation.`}</p>
        </div>
      </ContentBlockOutline>

      <div className="mt-6 flex px-10 flex-col-reverse md:flex-row max-w-5xl mx-auto mb-10">
        <div>
          <h2>Looking for more?</h2>
          <p>
            {`For technical information on my skills and experience, especially for enterprise (including 1099-E contracting), `}
            <span className="text-pink-500">
              <Link href="/skills">visit my skills page.</Link>
            </span>
          </p>
          <br />
          <p>{`Don't hesitate to reach out if you have any questions. For realsy. When you're ready, email me at `}</p>
          <h3 className="text-3xl font-bold">hi@bananabrann.dev</h3>

        </div>

        <BananamanSuit
          priority={false}
          className="mt-0 w-4/6 md:-mt-52 mx-auto"
        />
      </div>

      <NotReadyYetBanner />

      <Footer />
    </Layout>
  );
}
