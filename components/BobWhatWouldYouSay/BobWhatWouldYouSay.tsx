import Image from "next/image";
import BobTrianglePng from "../../res/png/bob-triangle.png";
import styles from "./BobWhatWouldYouSay.module.scss";

export default function BobWhatWouldYouSay() {
  return (
    <div className={`${styles.BobWhatWouldYouSay}`}>
      <div className={styles.foreground}>
        {/*
          TODO -- Could use some touch-up for mobile devices.
        */}
        {/* prettier-ignore */}
        <div className={`absolute z-50 text-4xl font-semibold -mt-20 ml-[36vw] md:text-5xl md:ml-[36vw] lg:ml-[26vw] `}>
          <h3>{`"What would you say ...`}</h3>
          <h3 className="ml-[25%]">{`you do here?"`}</h3>
        </div>

        <div className={styles.bobimagewrapper}>
          <Image
            src={BobTrianglePng}
            priority={false}
            quality={50}
            alt=""
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}
