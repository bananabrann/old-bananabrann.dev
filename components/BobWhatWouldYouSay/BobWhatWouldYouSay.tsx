import Image from "next/image";
import BobTrianglePng from "../../res/png/bob-triangle.png";
import styles from "./BobWhatWouldYouSay.module.scss";

export default function BobWhatWouldYouSay() {
  return (
    <div className={`${styles.BobWhatWouldYouSay} mt-52`}>
      <div className={styles.foreground}>
        {/*
          TODO -- Could use some touch-up for mobile devices.
        */}
        {/* prettier-ignore */}
        <div className={`absolute z-50 text-4xl font-semibold -mt-20 ml-[36vw] md:text-5xl md:ml-[36vw] lg:ml-[26vw] `}>
          <h3>"What would you say ...</h3>
          <h3 className="ml-[25%]">you do here?"</h3>
        </div>

        <div className={styles.bobimagewrapper}>
          <Image
            src={BobTrianglePng}
            priority={false}
            quality={50}
            alt=""
            layout="intrinsic"
            // objectFit="contain"
            // sizes="10vw"
          />
        </div>
      </div>

      {/* prettier-ignore */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="1344.651" height="353.559" viewBox="0 0 1344.651 353.559" >
        <g id="Polygon_1" data-name="Polygon 1" fill="#b7afa3">
          <path d="M894.492,33.237l450.159,174.841L101.382,353.559Z" stroke="none" />
          <path d="M 1342.318725585938 207.7321624755859 L 894.740966796875 34.10348129272461 L 111.5095596313477 351.0152587890625 L 1342.318725585938 207.7321624755859 M 1344.651245117188 208.0776824951172 L 101.3816070556641 353.5593872070312 L 894.4923706054688 33.23662567138672 L 1344.651245117188 208.0776824951172 Z" stroke="none" fill="#707070" />
        </g>
      </svg> */}
    </div>
  );
}
