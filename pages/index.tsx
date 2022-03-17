import Layout from "../components/Layout/Layout";
import BananamanStanding from "../components/BananamanStanding/BananamanStanding";

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
      <div className="hero flex-col h-20">
        <div className="lg:flex justify items-center">
          <BananamanStanding priority={true} />

          <div className="flex-col px-10">
            <h1 className="text-7xl font-bold">Succeed with your software</h1>
            <br />
            <p className="text-3xl">
              Whether it's a new IT system from scratch, or a touch-up on your
              website, I'm here to help you succeed online.
            </p>
            <br />
            <p className="text-3xl">When you're ready, email me at </p>
            <h3 className="text-4xl font-bold">hi@bananabrann.dev</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
