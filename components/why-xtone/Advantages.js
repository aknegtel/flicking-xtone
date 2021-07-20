import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import React from "react";

// this makes the array to be able to do the map later on to create the elements.
const advantages = [...Array(10).keys()];

const Advantages = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const plugins = [new Pagination({ type: "bullet" })];
  const flicking = React.createRef();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
    flicking.current.on("ready", () => {
      console.log("Flicking ready");
      plugins.forEach((plugin) => {
        plugin.init();
      });
    });
  }, [inView, controls]);

  const { t } = useTranslation("why-xtone");

  return (
    <>
      <section ref={ref} className="advantages-section w-container mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{
            ease: "easeInOut",
            duration: "0.55",
            delay: "0.15",
          }}
        >
          <Flicking
            ref={flicking}
            style={{ height: "600px", marginTop: "100px" }}
            align="prev"
            circular={false}
            plugins={plugins}
          >
            <div className="basis-50 flex justify-center items-start relative mr-4">
              <div
                style={{ height: "300px", marginTop: "100px" }}
                className="overflow-hidden w-full relative"
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 ease-easing transform scale-110 hover:scale-100 filter grayscale"
                  src="/static/images/why-xtone/advantages/advantages-0.jpg"
                  alt="Main advtanges image"
                />
              </div>
              <h3 className="absolute advantages text-5xl md:text-6xl lg:text-7xl text-center font-primary font-light uppercase italic  text-shadow">
                {t("advantages.title")}
              </h3>
              <p className="absolute advantages-description font-primary text-xs sm:text-sm  text-shadow">
                {t("advantages.description")}
              </p>
            </div>
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="basis-25 flex justify-center items-start relative mr-4"
              >
                <Slide
                  index={index}
                  image={`/static/images/why-xtone/advantages/advantages-${
                    index + 1
                  }.jpg`}
                  title={t(`advantages.${index + 1}.title`)}
                  description={t(`advantages.${index + 1}.description`)}
                />
              </div>
            ))}
            <ViewportSlot>
              <div className="flicking-pagination"></div>
            </ViewportSlot>
          </Flicking>
        </motion.div>
      </section>

      <style jsx>{`
        .advantages-section {
          margin: 0 auto;
          max-width: 1500px;
        }

        .advantages {
          top: 350px;
          left: 10%;
        }

        .advantages-description {
          top: 420px;
        }

        .basis-50 {
          width: 50%;
        }

        .basis-25 {
          width: 25%;
        }

        @media (max-width: 800px) {
          .basis-50 {
            width: 100%;
          }

          .advantages {
            top: auto;
            left: 0;
            right: 0;
          }

          .advantages-description {
            top: 55%;
          }

          .basis-25 {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

const Slide = ({ title, description, index, image }) => {
  return (
    <>
      <div
        style={{ height: "300px", marginTop: "100px" }}
        className="overflow-hidden w-full relative"
      >
        <Image
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 ease-easing transform scale-110 hover:scale-100 filter grayscale"
          src={image}
          alt={title}
        />
      </div>
      <h3 className="absolute advantage-number text-5xl md:text-6xl lg:text-7xl text-center font-primary font-light uppercase text-shadow">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </h3>
      <div className="absolute advantage-text">
        <h6
          id="slide-title"
          style={{ lineHeight: "20px" }}
          className="font-bold tracking-200 mr-tracking text-xs sm:text-sm uppercase"
        >
          {title}
        </h6>
        <p className="mt-2 advantage-description font-primary text-xs sm:text-sm">
          {description}
        </p>
      </div>
      <span className="advantage-line"></span>

      <style jsx>{`
        .advantage-number {
          top: 50px;
          left: 10%;
        }

        .advantage-text {
          top: 455px;
          left: 11%;
        }

        .advantage-line {
          position: absolute;
          top: 370px;
          left: 20px;
          width: 1px;
          opacity: 0.5;
          background-color: white;
          height: 120px;
        }
      `}</style>
    </>
  );
};

const SlideVideo = ({ index, ...props }) => {
  return (
    <>
      <div className="flex justify-center items-center mx-auto" {...props}>
        <div
          style={{ height: "600px", marginTop: "100px" }}
          className="overflow-hidden w-full relative"
        >
          <Image
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 ease-easing transform scale-105 hover:scale-100"
            src="/static/images/why-xtone/advantages/video-cover.jpg"
            alt="Main advtanges image"
          />
        </div>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default Advantages;
