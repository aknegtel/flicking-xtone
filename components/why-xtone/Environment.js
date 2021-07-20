import Section from "../layout/Section";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import EnvironmentLogos from "../EnvironmentLogos";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Environment = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const lineRef = React.createRef();

  useEffect(() => {
    if (inView) {
      const line = lineRef.current;
      line.style.animationPlayState = "running";
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [inView, controls, lineRef]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const image = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1.05 },
  };

  const { t } = useTranslation("why-xtone");

  return (
    <>
      <Section className="my-24 md:my-32 lg:my-40 xl:my-52">
        <div
          ref={ref}
          className="flex justify-end items-center relative max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto"
        >
          <span ref={lineRef} className="tailored-line"></span>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{
              ease: "easeInOut",
              duration: "0.75",
              delay: "0.4",
            }}
            className="absolute top-8 left-6 md:mr-80"
          >
            <h3 className="flex flex-col w-full text-left font-primary uppercase italic font-light environment-main-text cursor-default pointer-events-none">
              <span
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={-0.1}
                className="sm:ml-16"
              >
                {t("environment.title.first")}
              </span>
              <span
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={0.1}
                className=""
              >
                {t("environment.title.second")}
              </span>
              <span
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={-0.1}
                className="sm:ml-24"
              >
                {t("environment.title.third")}
              </span>
            </h3>
            <p className="font-primary text-sm md:text-base sm:text-right mt-4 absolute max-w-md">
              {t("environment.description")}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={image}
            transition={{
              ease: "easeInOut",
              duration: "0.55",
              delay: "",
            }}
            className="flex overflow-hidden flex-col items-end mr-4 ml-4 md:mr-0"
          >
            <div className="environment-main-image">
              <Image
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                src="/static/images/why-xtone/sunbeam.webp"
                alt="Tailoring your project main image"
              />
            </div>
            <EnvironmentLogos className="mt-4" />
          </motion.div>
        </div>
      </Section>

      <style jsx>{`
        .environment-main-text {
          z-index: 1;
        }

        .environment-main-image {
          height: 340px;
          width: 750px;
          filter: brightness(0.7);
          z-index: -1;
          position: relative;
        }

        .environment-main-text span {
          font-size: 85px;
          line-height: 72px;
        }

        .tailored-line {
          z-index: 99;
          position: absolute;
          height: 1px;
          top: 70px;
          left: 0px;
          transform: translateX(-750px);
          background-color: white;
          animation: tailored-line 2.5s ease-out forwards;
          animation-play-state: paused;
        }

        @media (max-width: 1300px) {
          .environment-main-text span {
            font-size: 75px;
            line-height: 66px;
          }

          .environment-main-image {
            width: 650px;
          }

          .tailored-line {
            left: 70px;
          }
        }

        @media (max-width: 1000px) {
          .environment-main-text span {
            font-size: 62px;
            line-height: 55px;
          }

          .environment-main-image {
            width: 500px;
            height: 300px;
          }

          .tailored-line {
            top: 60px;
            left: 50px;
          }
        }

        @media (max-width: 700px) {
          .environment-main-text span {
            font-size: 50px;
            line-height: 45px;
          }
          .tailored-line {
            display: none;
          }
        }

        @keyframes tailored-line {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 750px;
          }
        }
      `}</style>
    </>
  );
};

export default Environment;
