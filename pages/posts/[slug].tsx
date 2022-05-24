import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "../../components/Layout/Layout";
import { PostFrontMatter } from "../../lib/interfaces/Post.interface";
import { getRandomSixDigitNumber } from "../../lib/utils";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  // Return the possible paths for Next.js pre-render. Throw a 404 if not found.
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({
  frontmatter,
  content,
}: {
  frontmatter: PostFrontMatter;
  content: string;
}) {
  return (
    <Layout title={frontmatter.metaTitle}>
      <span className="flex gap-3 text-slate-600 font-mono font-bold text-sm">
        <p className="font-mono">{`${frontmatter.date} | `}</p>
        {frontmatter.tags?.map((tag: string) => {
          return <span key={`${tag}-${getRandomSixDigitNumber()}`}>{`#${tag}`}</span>;
        })}
      </span>

      <div className="prose mx-auto">
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </Layout>
  );
}
