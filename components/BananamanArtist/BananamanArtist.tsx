import Image from "next/image";
import { Fragment } from "react";
import BananamanArtistPng from "../../res/png/bananaman-painting.png";

export default function BananamanStanding({
  priority = false,
}: {
  priority?: boolean;
}) {
  return(
    <Fragment>
      <Image
        src={BananamanArtistPng}
        alt=""
        layout="intrinsic"
        quality={25}
        priority={priority}
      />
    </Fragment>
  )
}