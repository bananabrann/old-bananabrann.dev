import Footer from "../components/Footer/Footer";
import ThreeD from "../components/ThreeD/ThreeD";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "../lib/interfaces/Post.interface";
import axios, { AxiosResponse } from "axios";
import {
  Tweet,
  TwitterApiUserTweetResponse,
} from "../lib/interfaces/Tweet.interface";
import { RefreshIcon } from "@heroicons/react/solid";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import Link from "next/link";


// The public items for my Twitter.
const twitterId = "360232134";
const twitterUsername = "bananabrann";


// Get the latest tweets from @bananabrann.
async function getTweets(): Promise<TwitterApiUserTweetResponse> {
  try {
    const response: AxiosResponse = await axios({
      url: `https://api.twitter.com/2/users/${twitterId}/tweets`,
      params: {
        max_results: 10,
        // exclude: "replies",
      },
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    // NOTE - Notice that `data` is double nested. See
    // lib/interfaces/TwitterApiUserTweetResponse for what response.data looks
    // like.
    return response.data;
  } catch (error) {
    console.error(error);
    console.error("An error occurred. There is likely additional output above."); // prettier-ignore

    return {
      data: [] as Tweet[],
      meta: {
        result_count: NaN,
        newest_id: "",
        oldest_id: "",
        next_token: "",
      },
    };
  }
}

// Scrolls viewport to the Tweets content
function handleScrollToContent() {
  document.getElementById("tweets")?.scrollIntoView();
}

export async function getStaticProps() {
  // Find and parse blog posts stored on the system.
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

  // Get and parse Tweets.
  let tweets: TwitterApiUserTweetResponse = await getTweets();

  /**
   * Next.js will attempt to re-generate the page automatically. However, note
   * that it is not entirely reliable even though docs say it is.
   *
   * NOTE - Read more about incremental static regeneration at
   * https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
   */
  return {
    props: {
      posts,
      tweets,
    },
    revalidate: 60,
  };
}

export default function Home({
  posts,
  tweets,
}: {
  posts: Post[];
  tweets: TwitterApiUserTweetResponse;
}) {
  let tweetsSection;

  if (tweets.data.length > 0) {
    tweetsSection = (
      <Fragment>
        <div className="text-center text-slate-900 mb-3">
          <p>
            Latest {tweets.meta.result_count} things from
            <a
              href="https://twitter.com/bananabrann"
              className="hover:text-cyan-400 transition"
            >
              {" "}
              me, @{twitterUsername}
            </a>
          </p>

          {/* <p className="text-sm">{`(refreshes daily at 12am, U.S. Eastern)`}</p> */}
        </div>

        <div className="flex flex-wrap">
          {tweets.data.map((tweet: Tweet) => {
            // Twitter prefaces the `text` with "RT" if the tweet is a retweet.
            const isRetweet = tweet.text.slice(0, 2) === "RT";
            const isReply = tweet.text.slice(0, 1) === "@";

            return (
              <a
                href={`https://twitter.com/${twitterUsername}/status/${tweet.id}`}
                target="_blank"
                rel="noreferrer"
                key={tweet.id}
                className={`border-2 border-gray-500 m-1.5 p-2 rounded-md grow basis-44 text-sm transition hover:bg-gray-900 ${isRetweet ? "border-l-green-600" : ""
                  }
                ${isReply ? "border-l-blue-600" : ""}
                `}
              >
                {isRetweet && (
                  <div className="w-3 inline-block mr-1 text-green-600">
                    <RefreshIcon />
                  </div>
                )}

                {isReply && (
                  <div className="w-3 inline-block mr-1 text-blue-600">
                    <ArrowLeftIcon />
                  </div>
                )}

                {tweet.text}
              </a>
            );
          })}
        </div>

        <br />
        <p className="text-center mx-auto text-sm text-gray-400 max-w-2xl font-sans">{`I am neither a political activist nor an expert in culture. Tweets I interact with is not an endorsement of the author, and I do not share any opinion(s) the author may make in other tweets or interactions.`}</p>
      </Fragment>
    );
  } else {
    tweetsSection = (
      <div>
        <p className="text-center">
          {`Well, this is awkward... I wasn't able to fetch my latest Tweets.`}{" "}
          <a
            href="https://twitter.com/bananabrann"
            className="text-yellow-400"
          >
            {`Go to Twitter to see my latest activity.`}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="absolute pointer-events-none">
        <div className="md:mt-[10vh] pointer-events-none" />

        <section className="max-w-xl bg-black bg-opacity-70 m-4 p-5 ">
          <p>I make web apps (mostly)</p>
          <br />

          <p>
            {`I'm a software developer and prior U.S. Marine making enterprise
            websites and applications`}
          </p>
          <br />

          <p>
            To reach me, email me at{" "}
            <b className="text-yellow-400">hi@bananabrann.dev</b>
          </p>
        </section>

        <p className="p-2 ml-6 text-sm font-sans text-gray-500">
          {`I'm interactive! Click and hold, then drag`}
        </p>

        <div className="mt-[25vh] pointer-events-none" />

        <div className="pointer-events-auto" >
          <div
            className="text-white w-20 bg-black bg-opacity-70 p-2 rounded-full ml-10 cursor-pointer hover:text-yellow-500"
            onClick={() => handleScrollToContent()}
          >
            <ChevronDoubleDownIcon />
          </div>

          <section
            className="bg-black bg-opacity-70 m-4 p-5 pointer-events-auto"
            id="tweets"
          >
            {tweetsSection}
            
            {/* 
            {posts.map(({ slug, frontmatter }) => {
              return (
                <div key={slug}>
                  <Link href={`/posts/${slug}`}>

                  <h3 className="cursor-pointer">{frontmatter.metaTitle}</h3>
                  </Link>
                  <p>{frontmatter.date}</p>
                  <p>{frontmatter.metaDesc}</p>
                </div>
              )
            })}
            */}
          </section>

          <footer className="bottom-0 text-stone-200">
            <Footer />
          </footer>
        </div>
      </div>

      <ThreeD />
    </div>
  );
}
