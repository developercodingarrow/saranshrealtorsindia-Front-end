import "../styles/globals.css";
import AppContextApiProvider from "../contextApi/AppContextApi";
import ProjectContextApiProvider from "../contextApi/ProjectContextApi";
import UserContextApiProvider from "../contextApi/UserContextApi";
import DeveloperContextApiProvide from "../contextApi/DeveloperContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextApiProvider>
      <UserContextApiProvider>
        <ProjectContextApiProvider>
          <DeveloperContextApiProvide>
            <Component {...pageProps} />;
          </DeveloperContextApiProvide>
        </ProjectContextApiProvider>
      </UserContextApiProvider>
    </AppContextApiProvider>
  );
}

export default MyApp;
