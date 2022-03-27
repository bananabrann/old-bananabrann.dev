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
          <div className={`${styles.foregroundtext}`}>{`"What would you say ...`}</div>
          <div className={`${styles.foregroundtext} ml-[25%]`}>{`you do here?"`}</div>
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
