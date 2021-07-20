import PropTypes from "prop-types";
import Meta from "../Meta";
import Nav from "./navigation/Nav";
import Hero from "../Hero";
import Main from "./Main";
import Footer from "./Footer";
import { SmoothScrollProvider } from "../../helpers/SmoothScroll.context";

const CollectionLayout = ({
  smooth = true,
  hero,
  title,
  children,
  className,
}) => {
  return (
    <>
      <Meta />
      <Nav />
      {smooth ? (
        <SmoothScrollProvider options={{ smooth: true }}>
          <div className="mb-72" data-scroll-container>
            <Hero src={hero} title={title} type="big" titlePos="left" />
            <Main className={`${className}`}>{children}</Main>
            <Footer smooth={smooth} />
          </div>
        </SmoothScrollProvider>
      ) : (
        <>
          <Hero src={hero} title={title} type="big" titlePos="left" />
          <Main className={`${className}`}>{children}</Main>
          <Footer smooth={smooth} />
        </>
      )}
    </>
  );
};

CollectionLayout.propTypes = {
  hero: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CollectionLayout;
