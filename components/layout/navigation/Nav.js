import React, { useState } from "react";
import { useRouter } from "next/router";

import NavBar from "./NavBar";
import FullScreenNav from "./FullScreenNav";

const Nav = () => {
  const router = useRouter();
  const [lang, changeLang] = useState(router.locale);
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMenuState = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <nav className="relative h-full">
      <NavBar
        isMenuOpen={isMenuOpen}
        lang={lang}
        toggleMenu={toggleMenuState}
        changeLang={changeLang}
      />
      <FullScreenNav toggleMenu={toggleMenuState} open={isMenuOpen} />
    </nav>
  );
};

export default Nav;
