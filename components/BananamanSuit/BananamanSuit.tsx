import Image from "next/image";
import { Fragment } from "react";
import BananamanSuitPng from "../../res/png/bananaman-suit.png";

export default function BananamanSuit({
  priority = false,
  className = "",
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <Fragment>
      <div className={className}>
        <Image
          src={BananamanSuitPng}
          alt=""
          layout="intrinsic"
          quality={10}
          priority={priority}
        />
      </div>
    </Fragment>
  );
}
