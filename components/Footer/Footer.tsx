import Link from "next/link";

export default function Footer() {
  return (
    <div data-cy="footer" className="Footer bg-stone-800 text-stone-200 flex flex-col items-center p-8 ">
      <div className=" justify-around w-full max-w-screen-lg flex gap-6 flex-col-reverse sm:flex-row">
        <ul>
          {/* prettier-ignore */}
          <li data-cy="footer-link-home" className="hover:text-pink-500 transition"><Link href="/">{`Homepage`}</Link></li>
          {/* prettier-ignore */}
          <li data-cy="footer-link-web-services" className="hover:text-pink-500 transition"><Link href="/#web-services">{`Freelance service offerings`}</Link></li>
           {/* prettier-ignore */}
           <li data-cy="footer-link-works" className="hover:text-pink-500 transition"><Link href="/quote">{`Get a Quote`}</Link></li>
          {/* prettier-ignore */}
          <li data-cy="footer-link-skills" className="hover:text-pink-500 transition"><Link href="/skills">{`Skills & expertise`}</Link></li>
          {/* prettier-ignore */}
          <li data-cy="footer-link-works" className="hover:text-pink-500 transition"><Link href="/works">{`Works & projects`}</Link></li>
        </ul>

        <div className="text-xl text-center">
          <h2 className="text-3xl">{`hi@bananabrann.dev`}</h2>
          <p>Certified Software Engineer</p>
          <p>New Mexico, United States of America</p>
        </div>
      </div>
      <div className="text-sm mx-auto mt-5 text-center">
        <p>
          {`"Banana Man" art by `}
          <span className="hover:text-yellow-400 transition">
            <Link href="https://www.artstation.com/gabemichaelis">
              Gabe Michaelis
            </Link>
          </span>
          {`. All rights reserved, 2022.`}
        </p>
        <p>
          {`Website `}
          <span className="hover:text-yellow-400 transition">
            <Link href="https://github.com/bananabrann/bananabrann.dev/blob/main/LICENSE">
              MIT license
            </Link>
          </span>
          {`, 2022.`}
        </p>
      </div>
    </div>
  );
}
