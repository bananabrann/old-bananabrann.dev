import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import BananamanEngineerPng from "../../res/png/bananaman-engineer.png";
import { Fragment } from "react";

export default function UnderConstruction() {
  return (
    <Fragment>
      <div className="p-7 text-left sm:text-center">
        <h3 className="font-normal">
          {`Uh-oh... This page isn't `}
          <span className="font-bold">ripe</span> yet.
        </h3>
        <p>
          {`You're in the right spot, but this page isn't ready yet. Check back in later, or bug me about it. `}

          <span className="inline hover:text-pink-500 transition">
            <Link href="/">Go home</Link>
            <ArrowRight />
          </span>
        </p>
      </div>

      <div className="relative -mt-4 h-[80vh] max-h-[600px] w-full z-0 mb-10">
        <Image
          src={BananamanEngineerPng}
          alt=""
          layout="fill"
          objectFit="contain"
          quality={25}
          priority={true}
        />
      </div>
    </Fragment>
  );
}
