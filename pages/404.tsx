import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import ArrowRight from "../components/ArrowRight/ArrowRight";
import BananamanUpsetPng from "../res/png/bananaman-upset.png";

export default function Custom404() {
  return (
    <Layout title="bananabrann - 404">
      <div className="p-7 text-left sm:text-center">
        <h3 className="font-normal">
          Uh-oh... Something doesn't <span className="font-bold">peel</span>{" "}
          right.
        </h3>
        <p className="">
          {`This is a `}
          <span className="text-red-700 font-bold">404 error</span>
          {`. The web page you're looking for wasn't found. `}

          <span className="inline hover:text-pink-500 transition">
            <Link href="/">Go home</Link>
            <ArrowRight />
          </span>
        </p>
      </div>

      <div className="relative -mt-8 h-[80vh] max-h-[600px] w-full z-0">
        <Image
          src={BananamanUpsetPng}
          alt=""
          layout="fill"
          objectFit="contain"
          quality={25}
          priority={true}
        />
      </div>

      <Footer />
    </Layout>
  );
}
