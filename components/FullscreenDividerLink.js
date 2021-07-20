import Link from "next/link";
import PropTypes from "prop-types";

const FullscreenDividerLink = ({
  href,
  src,
  alt,
  title,
  subtitle,
  scrollSpeed = 1.6,
  desaturated,
}) => {
  return (
    <>
      <Link href={href}>
        <a className="w-screen flex flex-col justify-center items-stretch parallax overflow-hidden text-black text-center">
          <img
            className="object-cover"
            data-scroll
            data-scroll-speed={scrollSpeed}
            src={src}
            alt={alt}
          />
          <div className="absolute self-center flex flex-col justify-center items-center pointer-events-none">
            <h3 className="title font-primary font-light uppercase italic">
              {title}
            </h3>
            <span className="font-secondary text-xs sm:text-sm font-bold uppercase tracking-200">
              {subtitle}
            </span>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .parallax {
          height: 575px;
        }

        .parallax img {
          filter: ${desaturated && "contrast(0.65)"} brightness(1);
          transition: all 0.3s ease-out;
        }

        .parallax:hover img {
          filter: ${desaturated && "contrast(1.05)"} brightness(0.75);
        }

        .parallax:hover {
          color: #e3e3e3;
        }

        .title {
          font-size: 66px;
          line-height: 78px;
        }

        @media (max-width: 1700px) {
          .parallax {
            height: 425px;
          }
        }

        @media (max-width: 770px) {
          .title {
            font-size: 55px;
            line-height: 68px;
          }
        }
      `}</style>
    </>
  );
};

FullscreenDividerLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subtitle: PropTypes.string,
  desaturated: PropTypes.bool,
  scrollSpeed: PropTypes.number,
};

export default FullscreenDividerLink;
