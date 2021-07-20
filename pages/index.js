import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

import { useContext } from "react";
import dynamic from "next/dynamic";

import Layout2 from "../components/layout/Layout2";

// Dynamic loading section
const XtoneAltissimaTabSelect = dynamic(() =>
  import("../components/XtoneAltissimaTabSelect")
);
const SinteredCompactDescription = dynamic(() =>
  import("../components/why-xtone/SinteredCompactDescription")
);
const NaturalStoneDescription = dynamic(() =>
  import("../components/why-xtone/NaturalStoneDescription")
);
const Finishes = dynamic(() => import("../components/why-xtone/Finishes"));
const CareMaintenance = dynamic(() =>
  import("../components/why-xtone/CareMaintenance")
);
const Environment = dynamic(() =>
  import("../components/why-xtone/Environment")
);
const Advantages = dynamic(() => import("../components/why-xtone/Advantages"));
import XtoneAltissimaContext from "../helpers/XtoneAltissima.context";

const Materia = () => {
  const { altissima } = useContext(XtoneAltissimaContext);
  const { t } = useTranslation("why-xtone");

  return (
    <>
      <Layout2
        hero={"/static/images/hero/why-xtone.webp"}
        title={t("title")}
        heroblackwhite
        description={t("description")}
      >
        <XtoneAltissimaTabSelect />
        <section className="mt-12 2xl:mt-16">
          {!altissima && (
            <AnimatedContentWrapper>
              <SinteredCompactDescription />
            </AnimatedContentWrapper>
          )}
          {altissima && (
            <AnimatedContentWrapper>
              <NaturalStoneDescription />
            </AnimatedContentWrapper>
          )}
        </section>
        <section data-scroll data-scroll-speed={0.1} className="my-12">
          {!altissima && (
            <AnimatedContentWrapper>
              <Finishes altissima={false} />
            </AnimatedContentWrapper>
          )}
          {altissima && (
            <AnimatedContentWrapper>
              <Finishes altissima={true} />
            </AnimatedContentWrapper>
          )}
        </section>
        <div id="advantages">
          <Advantages />
        </div>
        <CareMaintenance />
        <Environment />
      </Layout2>
    </>
  );
};

const AnimatedContentWrapper = ({ children }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        ease: "easeInOut",
        duration: "0.65",
        delay: "0.05",
        staggerChildren: "0.2",
      }}
    >
      {children}
    </motion.div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "why-xtone",
      "footer",
      "menu",
    ])),
  },
});

export default Materia;
