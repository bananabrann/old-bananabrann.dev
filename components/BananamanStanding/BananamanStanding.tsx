import { Fragment } from "react";
import Image from "next/image";
import BananamanStandingPng from "../../res/png/bananaman-standing.png";

export default function BananamanStanding({
  priority = false,
}: {
  priority?: boolean;
}) {
  return (
    <Fragment>
      <Image
        src={BananamanStandingPng}
        layout="intrinsic"
        quality={10}
        priority={priority}
      />
    </Fragment>
  );
}
