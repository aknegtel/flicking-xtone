import Meta from "../Meta";
import Nav from "./navigation/Nav";
import Hero from "../Hero";
import Main from "./Main";
import Footer from "./Footer";
import { SmoothScrollProvider } from "../../helpers/SmoothScroll.context";

const Layout = ({ smooth = true, className, hero, title, children }) => {
  return (
    <>
      <Meta />
      <Nav />
      {smooth ? (
        <SmoothScrollProvider options={{ smooth: true }}>
          <div data-scroll-container>
            {hero && <Hero src={hero} title={title} />}
            <Main className={className}>{children}</Main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      ) : (
        <>
          {hero && <Hero src={hero} title={title} />}
          <Main className={className}>{children}</Main>
          <Footer smooth={smooth} />
        </>
      )}
    </>
  );
};

export default Layout;
