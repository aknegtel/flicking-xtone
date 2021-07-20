import Meta from "../Meta";
import Nav from "./navigation/Nav";
import Main from "./Main";
import Footer from "./Footer";
import { SmoothScrollProvider } from "../../helpers/SmoothScroll.context";

const Homepage = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <SmoothScrollProvider options={{ smooth: true }}>
        <div data-scroll-container>
          <Main>{children}</Main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </>
  );
};

export default Homepage;
