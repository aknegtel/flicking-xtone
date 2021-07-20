import PropTypes from "prop-types";

import Meta from "../Meta";
import Nav from "./navigation/Nav";
import Hero from "../Hero";
import Main from "./Main";
import Footer from "./Footer";
import Paragraph from "../typography/Paragraph";
import { useTranslation } from "react-i18next";

const WithSubmenu = ({
  selected,
  light,
  handler,
  categories,
  className,
  hero,
  title,
  children,
}) => {
  return (
    <>
      <Meta />
      <Nav />
      <Hero light={light} src={hero} title={title} />
      <Submenu
        light={light}
        selected={selected}
        handler={handler}
        categories={categories}
        className={`${light ? "bg-white" : " bg-black"} py-8`}
      />
      <Main className={className}>{children}</Main>
      <Footer />
    </>
  );
};

const Submenu = ({ light, selected, handler, categories, className }) => {
  const { t } = useTranslation("maintenance");
  return (
    <div className={className}>
      <div className="w-container container mx-auto overflow-x-hidden flex flex-col items-center md:flex-row gap-6">
        {categories.map((element, index) => (
          <a
            key={index}
            onClick={() => handler(element)}
            className={`link--metis uppercase select-none font-bold ${
              selected === element ? `active` : ""
            }
            ${selected && light ? "border-black" : "border-white"}
            ${light ? "text-black" : "text-white"}`}
          >
            <Paragraph className="">{t(element)}</Paragraph>
          </a>
        ))}
      </div>
    </div>
  );
};

WithSubmenu.propTypes = {
  hero: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WithSubmenu;
