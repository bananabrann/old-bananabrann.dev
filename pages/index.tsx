import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.scss";

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
      <div className={styles.container}>

      </div>
    </Layout>
  );
}
