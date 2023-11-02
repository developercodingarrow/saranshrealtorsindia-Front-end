import "../styles/globals.css";
import AppContextApiProvider from "../contextApi/AppContextApi";
import ProjectContextApiProvider from "../contextApi/ProjectContextApi";
import UserContextApiProvider from "../contextApi/UserContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextApiProvider>
      <UserContextApiProvider>
        <ProjectContextApiProvider>
          <Component {...pageProps} />;
        </ProjectContextApiProvider>
      </UserContextApiProvider>
    </AppContextApiProvider>
  );
}

export default MyApp;
