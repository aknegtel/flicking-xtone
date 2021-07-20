import { motion } from "framer-motion";

const Hero2 = ({ src, blackwhite, title, description, className }) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <>
      <div className="my-28 xl:my-32">
        <div
          className={`jsx-hero-image bg-cover bg-no-repeat bg-center h-36 md:h-52 lg:h-72 xl:h-80 ${className}`}
        ></div>
        <div className="relative -mt-8 lg:-mt-9 xl:-mt-12 2xl:-mt-16 pl-12 md:pl-16 lg:pl-24 xl:pl-40 2xl:pl-48 mx-auto container">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeInOut", delay: "0.25" }}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={-0.1}
            className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase italic font-primary font-light text-shadow-hero"
          >
            {title}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeInOut", delay: "0.55" }}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={-0.2}
            className="font-primary text-xs sm:text-sm md:text-base text-left mt-2 max-w-xs sm:max-w-sm md:max-w-md"
          >
            {description && description}
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        .jsx-hero-image {
          background-image: url(${src});
          -webkit-filter: ${blackwhite && "grayscale(100%)"} brightness(0.65); /* Safari 6.0 - 9.0 */
          filter: ${blackwhite && "grayscale(100%)"} brightness(0.65);
        }

        .text-shadow-hero {
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </>
  );
};

export default Hero2;
