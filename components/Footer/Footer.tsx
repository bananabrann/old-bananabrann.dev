import Link from "next/link";
import FlagUnitedStatesSvg from "../../res/svg/flag-us.svg";

export default function Footer() {
  return (
    <div data-cy="footer" className="flex flex-col items-center text-center p-6">
      {/* <span className="fill-white">
        <FlagUnitedStatesSvg />
      </span> */}

      <p className="text-sm font-sans">Site 2.0.0 | Golem 1.0.1 | GTV 1.0.24</p>

      {/*
      <p className="text-sm mx-auto mt-5 text-center">
        <p>
          {`"Banana Man" art by `}
          <span className="hover:text-yellow-400 transition">
            <Link href="https://www.artstation.com/gabemichaelis">
              Gabe Michaelis
            </Link>
          </span>
          {`. All rights reserved, 2022.`}
        </p> 
        {`Website `}
        <span className="hover:text-yellow-400 transition">
          <Link href="https://github.com/bananabrann/bananabrann.dev/blob/main/LICENSE">
            MIT license
          </Link>
        </span>
        {`, 2022.`}
      </p>
      */}
    </div>
  );
}
