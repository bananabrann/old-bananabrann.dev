import Layout from "../components/layout";

/*
  NOTE 
  For an exmaple of using types with getStaticProps and other stuff, see
  https://github.com/vercel/next-learn/blob/master/basics/typescript-final/pages/index.tsx
  and
  https://nextjs.org/learn/excel/typescript/nextjs-types
*/

export default function Home() {
  return (
    <Layout home={true}>
      <h1>Hello!</h1>
    </Layout>
  );
}
