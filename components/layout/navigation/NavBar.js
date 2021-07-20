import React, { useEffect, useState } from "react";
import Link from "next/link";

import LogoXtone from "../../../public/logos/logo_xtone.svg";

import VerticalLangSelector from "./VerticalLangSelector";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

const NavBar = ({ lang, changeLang, toggleMenu, isMenuOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    // Find the current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const { t } = useTranslation("menu");

  return (
    <>
      <div
        className={`mix-blend-difference fixed flex justify-between transform w-container my-14 xl:my-16 ${
          visible ? "top-0 opacity-100" : "-top-16 opacity-0"
        } left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all ease-easing duration-300 items-center z-50`}
      >
        <Link href="/">
          <a>
            <LogoXtone className="h-4 w-auto justify-self-start fill-current" />
          </a>
        </Link>
        <div className="flex flex-row gap-4 items-center">
          <MenuItem
            className="select-none mr-2 sm:mr-4 lg:mr-6 cursor-pointer"
            toggleMenu={toggleMenu}
          >
            {isMenuOpen ? t("close") : t("menu")}
          </MenuItem>
          <VerticalLangSelector lang={lang} changeLang={changeLang} />
        </div>
      </div>
    </>
  );
};

function MenuItem({ children, toggleMenu, className }) {
  return (
    <>
      <a
        onClick={toggleMenu}
        className={`jsx-menu relative font-secondary text-white text-xs sm:text-sm tracking-200 uppercase font-bold ${className}`}
      >
        {children}
      </a>

      <style jsx>{`
        @media (min-width: 640px) {
          .jsx-menu::before {
            transition: all 0.2s ease;
            content: "";
            position: absolute;
            top: 50%;
            left: -3rem;
            z-index: 1;
            width: 2rem;
            height: 1px;
            background-color: #fff;
            pointer-events: none;
          }

          .jsx-menu:hover::before,
          .jsx-menu:focus::before {
            width: 4rem;
            left: -1rem;
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;
