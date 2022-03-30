import Link from "next/link";

export default function Footer() {
  return (
    <div className="Footer bg-stone-800 text-stone-200 flex flex-col items-center p-8 ">
      <div className=" justify-around w-full max-w-screen-lg flex gap-6 flex-col-reverse sm:flex-row">
        <ul>
          {/* prettier-ignore */}
          <li className="hover:text-pink-500 transition"><Link href="/">{`Homepage`}</Link></li>
          {/* prettier-ignore */}
          <li className="hover:text-pink-500 transition"><Link href="/#web-services">{`Freelance service offerings`}</Link></li>
          {/* prettier-ignore */}
          <li className="hover:text-pink-500 transition"><Link href="/skills">{`Skills & expertise`}</Link></li>
          {/* prettier-ignore */}
          <li className="hover:text-pink-500 transition"><Link href="#">{`Works & projects`}</Link></li>
        </ul>

        <div className="text-xl text-center">
          <h2 className="text-3xl">{`hi@bananabrann.dev`}</h2>
          <p>Certified Software Engineer</p>
          <p>in New Mexico, United States of America</p>
        </div>
      </div>
      <div className="text-sm mx-auto mt-5 text-center">
        <p>{`"Banana Man" art assets CC 2.0, 2022`}</p>
        <p>{`Website MIT license.`}</p>
      </div>
    </div>
  );
}
