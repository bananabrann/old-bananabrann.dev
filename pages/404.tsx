import Link from "next/link";


export default function Custom404() {
  return (
    // <Layout title="bananabrann - 404">
      <div className="p-7 text-left sm:text-center fixed">
        <h3 className="font-normal">
          {`Uh-oh... Something doesn't `}<span className="font-bold">peel</span>{" "}
          right.
        </h3>
        <p className="">
          {`This is a `}
          <span className="text-red-600 font-bold">404 error</span>
          {`. The web page you're looking for wasn't found. `}

          <span className="inline">
            <Link href="/">Go home</Link>
          </span>
        </p>
      </div>
    // </Layout>
  );
}
