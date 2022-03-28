import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer bg-stone-800 text-stone-200 flex flex-col items-center p-8 ">
      <div className=" justify-around w-full max-w-screen-lg flex gap-6 flex-col-reverse sm:flex-row">
        <ul>
          {/* prettier-ignore */}
          <li><Link href="/">{`Home`}</Link></li>
          {/* prettier-ignore */}
          <li><Link href="#">{`Blog`}</Link></li>
          {/* prettier-ignore */}
          <li><Link href="#">{`Skills`}</Link></li>
          {/* prettier-ignore */}
          <li><Link href="#">{`Works & Projects`}</Link></li>
          {/* prettier-ignore */}
          <li><Link href="#">{`Cookies policy`}</Link></li>
          {/* prettier-ignore */}
          <li><Link href="#">{`Copyright and citations`}</Link></li>
        </ul>

        <div className="text-xl text-center">
          <h2 className="text-3xl">{`hi@bananabrann.dev`}</h2>
          <p>Certified Software Engineer</p>
          <p>Fairfax, Virginia, United States of America</p>
        </div>
      </div>
      <div>
        <p className="text-sm mx-auto mt-5">"Banana Man" assets CC 2.0. Website MIT license.</p>
      </div>
    </div>
  );
}
