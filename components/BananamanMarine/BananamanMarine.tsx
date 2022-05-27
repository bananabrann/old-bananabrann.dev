import Image from "next/image";
import { Fragment } from "react";
import BananamanMarinePng from "../../res/png/bananaman-marine.png";

export default function BananamanStanding({
  priority = false,
}: {
  priority?: boolean;
}) {
  return(
    <Fragment>
      <Image
        src={BananamanMarinePng}
        alt=""
        layout="intrinsic"
        quality={25}
        priority={priority}
      />
    </Fragment>
  )
}