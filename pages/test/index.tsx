import Footer from "../../components/Footer/Footer";
import ThreeD from "../../components/ThreeD/ThreeD";


export default function ThreeJSTest() {

  return (
    <div>
      <section className="fixed text-stone-200 bg-black bg-opacity-70 top-1/4 m-4 p-5 max-w-2xl">
        {/* <h1>hi@bananabrann.dev</h1> */}
        <p>I make web apps (mostly)</p>
        <br />

        <p>email me at <b>hi@bananabrann.dev</b></p>
      </section>

      <footer className="fixed bottom-0 text-stone-200">
        <Footer />
      </footer>

      <ThreeD />
    </div>
  );
}
