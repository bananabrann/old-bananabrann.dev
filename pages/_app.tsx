import "../styles/globals.scss";
import { AppProps } from "next/app";
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
