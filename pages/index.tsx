import BananamanStanding from "../components/BananamanStanding/BananamanStanding";
import Layout from "../components/Layout/Layout";
import DiscordBlackSvg from "../res/svg/discord-tiny-black.svg";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "../lib/interfaces/Post.interface";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts: Post[] = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    } as Post;
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <div className="flex items-center max-w-2xl mx-auto">
        <div className="max-w-[250px]">
          <BananamanStanding priority={true} />
        </div>

        <div>
          <p className="text-xl">{`I'm Lee. I'm a software engineer helping teams build and maintain tools that help people get stuff done.`}</p>
          <br />
          <p className="text-xl">{`Email me at `}</p>
          <h3 className="text-xl font-bold">hi@bananabrann.dev</h3>
          <div className="flex gap-1 items-center">
            <span>{`or message `}</span>
            <DiscordBlackSvg />
            <span>{`bananabrann#0001`}</span>
          </div>
        </div>
      </div>

      {posts.map(({ slug, frontmatter }) => {
        return (
          <div key={slug}>
            <Link href={`/posts/${slug}`}>
              <div className="cursor-pointer">
                <h2>{frontmatter.metaTitle}</h2>
                <p>{frontmatter.metaDesc}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}
