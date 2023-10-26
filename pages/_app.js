import "../styles/globals.css";
import AppContextApiProvider from "../contextApi/AppContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextApiProvider>
      <Component {...pageProps} />;
    </AppContextApiProvider>
  );
}

export default MyApp;
