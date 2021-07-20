import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const LargeFormat = dynamic(() =>
  import("../../public/logos/why-xtone/tabla.svg")
);
const Thickness = dynamic(() =>
  import("../../public/logos/why-xtone/espesoresXTONE.svg")
);

const SinteredCompactDescription = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const { t } = useTranslation("why-xtone");

  return (
    <>
      <div className="relative flex flex-col justify-center items-stretch description-section overflow-hidden py-12">
        <div
          data-scroll
          data-scroll-speed={-1}
          className="description-bg-image w-full h-full"
        >
          <Image
            layout="fill"
            objectFit="cover"
            priority
            className="h-full"
            src="/static/images/why-xtone/sintered-bg.webp"
            alt="Why XTONE background image"
          />
        </div>
        <div className="sm:w-container container mx-auto absolute self-center flex flex-col justify-center items-center pointer-events-none max-w-lg md:max-w-4xl xl:max-w-6xl gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: "0.75",
              delay: "0.25",
            }}
            className="self-center md:self-start relative w-container"
          >
            <LargeFormat className="relative w-36 md:w-44 lg:w-48 opacity-60 sm:opacity-100" />
            <div className="absolute top-1/3 sm:top-1/2 transform -translate-y-5 lg:-translate-y-7 left-1/8 sm:left-28 md:left-36 lg:left-40">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-primary font-light uppercase">
                {t("descriptionSection.sintered.largeFormat.title")}
              </h2>
              <p className="ml-12 md:ml-16 mt-4 md:mt-5 font-primary text-xs md:text-sm max-w-sm md:max-w-md text-description">
                {t("descriptionSection.sintered.largeFormat.description")}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: "0.75",
              delay: "0.8",
            }}
            className="self-center md:self-end relative flex items-center"
          >
            <div className="text-right mr-2 sm:mr-5">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-primary font-light uppercase">
                {t("descriptionSection.sintered.thickness.title")}
              </h2>
              <p className="mt-4 md:mt-5 font-primary text-xs md:text-sm max-w-sm md:max-w-md text-description">
                {t("descriptionSection.sintered.thickness.description")}
              </p>
            </div>
            <Thickness className="relative w-36 md:w-44 lg:w-48 opacity-60 sm:opacity-90 transform scale-90" />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .description-section {
          height: 900px;
        }

        .description-bg-image {
          filter: brightness(0.3);
        }

        @media (max-width: 770px) {
          .description-section {
            height: 700px;
          }

          .text-description {
            max-width: 260px;
          }
        }
      `}</style>
    </>
  );
};

export default SinteredCompactDescription;
