import "../styles/globals.css";
import AppContextApiProvider from "../contextApi/AppContextApi";
import ProjectContextApiProvider from "../contextApi/ProjectContextApi";
import UserContextApiProvider from "../contextApi/UserContextApi";
import DeveloperContextApiProvide from "../contextApi/DeveloperContextApi";
import AdminContextApiProvider from "../contextApi/AdminContextApi";
import BlogContextApiProvide from "../contextApi/BlogContextApi";
import EnquireyContextApiProvider from "../contextApi/EnquireyContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextApiProvider>
      <UserContextApiProvider>
        <ProjectContextApiProvider>
          <DeveloperContextApiProvide>
            <AdminContextApiProvider>
              <BlogContextApiProvide>
                <EnquireyContextApiProvider>
                  <Component {...pageProps} />
                </EnquireyContextApiProvider>
              </BlogContextApiProvide>
            </AdminContextApiProvider>
          </DeveloperContextApiProvide>
        </ProjectContextApiProvider>
      </UserContextApiProvider>
    </AppContextApiProvider>
  );
}

export default MyApp;
