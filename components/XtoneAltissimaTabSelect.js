import { useTranslation } from "next-i18next";
import { useContext } from "react";

import XtoneAltissimaContext from "../helpers/XtoneAltissima.context";

const XtoneAltissimaTabSelect = ({ className }) => {
  const { altissima } = useContext(XtoneAltissimaContext);
  const { t } = useTranslation("common");
  return (
    <>
      <div className={className}>
        <div className="flex flex-col items-center gap-6 sm:gap-6 md:gap-16 sm:flex-row justify-center">
          <Selector active={altissima === false}>
            {t("sinteredCompact")}
          </Selector>
          <Selector active={altissima === true}>{t("naturalStone")}</Selector>
        </div>
      </div>
    </>
  );
};

{
  /* Supposing the altissima state is handled with boolean */
}
const Selector = ({ active, children }) => {
  const { altissima, setAltissima } = useContext(XtoneAltissimaContext);

  return (
    <>
      <a
        onClick={() => (!active ? setAltissima(!altissima) : null)}
        className={`selector select-none font-secondary text-xs sm:text-sm font-bold uppercase tracking-200 mr-tracking link--metis cursor-pointer transition-all duration-500 ease-easing hover:opacity-80 ${
          active ? "active" : " opacity-40"
        }`}
      >
        {children}
      </a>

      <style jsx>{`
        .link--metis::before,
        .link--metis::after {
          top: 120%;
        }

        .link--metis.active::before {
          top: 120%;
        }
      `}</style>
    </>
  );
};

export default XtoneAltissimaTabSelect;
