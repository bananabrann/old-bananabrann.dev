import BananamanStanding from "../components/BananamanStanding/BananamanStanding";
import Layout from "../components/Layout/Layout";
import DiscordBlackSvg from "../res/svg/discord-tiny-black.svg";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "../lib/interfaces/Post.interface";
import Link from "next/link";
import { getRandomSixDigitNumber } from "../lib/utils";

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
      <section className="flex flex-col items-center max-w-2xl mx-auto lg:flex-row">
        <div className="max-w-[250px]">
          <BananamanStanding priority={true} />
        </div>

        <div>
          <p className="text-xl">{`I'm a software engineer helping teams build and maintain tools that help people get stuff done.`}</p>
          <br />
          <p className="text-xl">{`Email me at `}</p>
          <h3 className="text-xl font-bold">hi@bananabrann.dev</h3>
          <div className="flex gap-1 items-center">
            <span>{`or message `}</span>
            <DiscordBlackSvg />
            <span>{`bananabrann#0001`}</span>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200 rounded my-4"></div>

      <section className="flex flex-col">
        {posts.map(({ slug, frontmatter }) => {
          return (
            <div
              key={slug}
              className="hover:bg-gray-200 transition hover:text-slate-700 rounded-lg p-4"
            >
              <Link href={`/posts/${slug}`}>
                <a className="flex gap-4 items-center">
                  <div className="w-[80px] hidden md:block">
                    <Image
                      alt={frontmatter.title}
                      src={`/${frontmatter.socialImage}`}
                      layout="fixed"
                      height="80"
                      width="80"
                      quality={0}
                    />
                  </div>

                  <div className="cursor-pointer text-slate-900">
                    <span className="flex flex-wrap gap-x-3 -gap-y-3 text-slate-900 font-mono text-sm">
                      <p className="font-mono">{`${frontmatter.date} | `}</p>
                      {frontmatter.tags?.map((tag: string) => {
                        return (
                          <span
                            key={`${tag}-${getRandomSixDigitNumber()}`}
                            className="font-bold"
                          >{`#${tag}`}</span>
                        );
                      })}
                    </span>
                    <h3 className="py-2">{frontmatter.metaTitle}</h3>
                    <p>{frontmatter.metaDesc}</p>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
    </Layout>
  );
}
