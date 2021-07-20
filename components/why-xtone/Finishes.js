import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlurredImageVariant from "../BlurredImageVariant";

const Finishes = ({ altissima }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const first = [1, 2];
  const second = [1, 2, 3];
  const third = [1, 2, 3];
  const fourth = [1, 2];
  const fifth = [1, 2];

  const finishes = "Finishes";

  const finishesXTONE = [
    "Nature",
    "Polished",
    "Silk",
    "Texture",
    "Rock",
    "Deco",
  ];

  const finishesAltissima = ["Polished", "Honed", "Leather"];

  const [activeFinish, setActiveFinish] = useState(0);

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
  }, [inView, controls]);

  return (
    <>
      <div
        ref={ref}
        className="finishes-section overflow-hidden flex justify-center items-center relative"
      >
        <div className="finishes-background max-w-screen-xl absolute">
          <div className="flex gap-2 finishes-1">
            {first.map((element, index) => (
              <h2
                key={index}
                data-scroll
                data-scroll-speed={-0.4}
                className={`finishes-background-text select-none opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-20 font-primary font-light uppercase italic cursor-default ${
                  index === 1 ? "opacity-20" : ""
                }`}
              >
                {finishes}
              </h2>
            ))}
          </div>
          <div className="flex gap-2 finishes-2">
            {second.map((element, index) => (
              <h2
                key={index}
                data-scroll
                data-scroll-speed={-0.4}
                className="finishes-background-text select-none opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-20 font-primary font-light uppercase italic cursor-default"
              >
                {finishes}
              </h2>
            ))}
          </div>
          <div className="flex gap-2 finishes-3">
            {third.map((element, index) => (
              <h2
                key={index}
                data-scroll
                data-scroll-speed={-0.4}
                className="finishes-background-text select-none opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-20 font-primary font-light uppercase italic cursor-default"
              >
                {finishes}
              </h2>
            ))}
          </div>
          <div className="flex gap-2 finishes-4">
            {fourth.map((element, index) => (
              <h2
                key={index}
                data-scroll
                data-scroll-speed={-0.4}
                className="finishes-background-text select-none opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-20 font-primary font-light uppercase italic cursor-default"
              >
                {finishes}
              </h2>
            ))}
          </div>
          <div className="flex gap-2 finishes-5">
            {fifth.map((element, index) => (
              <h2
                key={index}
                data-scroll
                data-scroll-speed={-0.4}
                className="finishes-background-text select-none opacity-10 transition-opacity duration-300 ease-in-out hover:opacity-20 font-primary font-light uppercase italic cursor-default"
              >
                {finishes}
              </h2>
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{
            ease: "easeInOut",
            duration: "0.55",
            delay: "0.15",
          }}
          className="flex gap-8"
        >
          <div className="relative image z-10 black-shadow">
            {altissima
              ? finishesAltissima.map((element, index) => (
                  <BlurredImageVariant
                    layout="fill"
                    objectFit="cover"
                    key={index}
                    className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                      activeFinish === index ? "opacity-100" : "opacity-0"
                    }`}
                    src={`/static/images/why-xtone/altissima-finishes/finish-${
                      index + 1
                    }.jpg`}
                    alt=""
                  />
                ))
              : finishesXTONE.map((element, index) => (
                  <BlurredImageVariant
                    layout="fill"
                    objectFit="cover"
                    key={index}
                    className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                      activeFinish === index ? "opacity-100" : "opacity-0"
                    }`}
                    src={`/static/images/why-xtone/xtone-finishes/finish-${
                      index + 1
                    }.jpg`}
                    alt=""
                  />
                ))}
          </div>
          <div className="self-end flex flex-col gap-2 mr-4 sm:mr-0">
            {altissima
              ? finishesAltissima.map((element, index) => (
                  <a
                    key={index}
                    onClick={() => setActiveFinish(index)}
                    className={`${
                      activeFinish === index ? "opacity-100" : "opacity-30"
                    } text-sm uppercase transition-opacity duration-500 ease-in-out font-bold tracking-200 mr-tracking cursor-pointer black-shadow`}
                  >
                    {element}
                  </a>
                ))
              : finishesXTONE.map((element, index) => (
                  <a
                    key={index}
                    onClick={() => setActiveFinish(index)}
                    className={`${
                      activeFinish === index ? "opacity-100" : "opacity-30"
                    } text-sm uppercase transition-opacity duration-500 ease-in-out font-bold tracking-200 mr-tracking cursor-pointer black-shadow`}
                  >
                    {element}
                  </a>
                ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .black-shadow {
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
          text-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
        }

        .finishes-section {
          min-height: 650px;
        }

        .finishes-background {
          margin-right: 30rem;
        }

        .finishes-background-text {
          font-size: 140px;
          line-height: 112px;
        }

        .image {
          width: 700px;
          height: 380px;
        }

        .finishes-1 {
          margin-left: 1rem;
        }
        .finishes-2 {
          margin-left: -8rem;
        }
        .finishes-3 {
          margin-left: -16rem;
        }
        .finishes-4 {
          margin-left: -1rem;
        }
        .finishes-5 {
          margin-left: -10rem;
        }

        @media (max-width: 770px) {
          .image {
            width: 70vw;
          }
        }
      `}</style>
    </>
  );
};

export default Finishes;
