import Image from "next/image";
import React from "react";
import BananamanStandingPNG from "../../res/png/bananaman/bananaman-standing.png";

export default function BananamanStanding() {
  return (
    <React.Fragment>
      <Image
        alt="A strong, confident banana man --your future developer!"
        src={BananamanStandingPNG}
        layout="responsive"
        quality="50"
      />
    </React.Fragment>
  );
}
