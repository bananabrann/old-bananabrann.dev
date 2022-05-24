import BananamanStanding from "../components/BananamanStanding/BananamanStanding";
import Layout from "../components/Layout/Layout";
import DiscordBlackSvg from "../res/svg/discord-tiny-black.svg";

export default function Home() {
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
    </Layout>
  );
}
