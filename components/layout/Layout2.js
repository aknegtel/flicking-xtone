import Meta from "../Meta";
import Nav from "./navigation/Nav";
import Hero2 from "../Hero2";
import Main from "./Main";
import Footer from "./Footer";
import { SmoothScrollProvider } from "../../helpers/SmoothScroll.context";

const Layout2 = ({
  smooth = true,
  className,
  hero = true,
  heroblackwhite,
  title,
  description,
  children,
}) => {
  return (
    <>
      <Meta />
      <Nav />
      {smooth ? (
        <SmoothScrollProvider options={{ smooth: true }}>
          <div data-scroll-container>
            {hero && (
              <Hero2
                blackwhite={heroblackwhite}
                src={hero}
                title={title}
                description={description}
              />
            )}
            <Main className={className}>{children}</Main>
            <div className="pb-28">
              <Footer smooth={smooth} />
            </div>
          </div>
        </SmoothScrollProvider>
      ) : (
        <>
          {hero && (
            <Hero2
              blackwhite={heroblackwhite}
              src={hero}
              title={title}
              description={description}
            />
          )}
          <Main className={className}>{children}</Main>
          <Footer smooth={smooth} />
        </>
      )}
    </>
  );
};

export default Layout2;
