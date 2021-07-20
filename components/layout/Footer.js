import React from "react";
import dynamic from "next/dynamic";

import { useTranslation } from "next-i18next";

const SmallText = dynamic(() => import("../typography/SmallText"));
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));
const LogoXtone = dynamic(() => import("../../public/logos/logo_xtone.svg"));
const Social = dynamic(() => import("../Social"));

const Footer = ({ smooth = true }) => {
  const product_links = [
    {
      text: "Sintered compact",
      href: "/collections/sintered",
    },
    {
      text: "Natural stone",
      href: "/collections/natural",
    },
    {
      text: "Bath and tables",
      href: "/product",
    },
    {
      text: "Natural stone",
      href: "/downloads",
    },
  ];

  // TODO: create the remaining links

  return (
    <>
      <footer
        className={`w-container mx-auto ${
          smooth ? "pb-12" : "pb-12"
        } flex flex-col md:flex-row flex-wrap items-stretch justify-between gap-x-6 gap-y-14 md:gap-x-12`}
      >
        <div className="flex flex-row justify-between items-center md:items-start md:flex-col gap-y-6">
          <LogoXtone className="w-12 md:w-16 fill-current" />
          <Legal />
          <div className="order-first md:order-none md:mt-6">
            <Social />
          </div>
        </div>
        <div className="flex flex-wrap flex-row gap-1 sm:gap-2 md:gap-6 lg:gap-10 justify-between">
          <Category title="Product" links={product_links} />
          <Category title="Professional" links={product_links} />
          <Category title="Contact us" links={product_links} />
        </div>
        <div className="separator hidden xl:block"></div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Link href="/">
            <a className="select-none text-xs sm:text-sm uppercase font-bold link--metis tracking-200 mr-tracking">
              <div className="flex flex-col justify-start items-center">
                <Image
                  width={32}
                  height={25}
                  src="/logos/footer/newsletter.png"
                />
                <span className="mt-4">Stay informed</span>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="select-none text-xs sm:text-sm uppercase font-bold link--metis tracking-200 mr-tracking">
              <div className="flex flex-col justify-start items-center">
                <Image width={45} height={20} src="/logos/footer/sample.png" />
                <span className="mt-4">Request a sample</span>
              </div>
            </a>
          </Link>
        </div>
      </footer>

      <style jsx>{`
        .separator {
          height: 10rem;
          width: 1px;
          background: white;
        }

        .social {
          order: 1;
        }
      `}</style>
    </>
  );
};

const Category = ({ title, links }) => {
  return (
    <div className="w-max text-center md:text-left">
      <p className="select-none font-secondary text-white text-xs sm:text-sm uppercase font-bold tracking-200 mr-tracking mb-6">
        {title}
      </p>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => {
          return (
            <a
              key={index}
              className="select-none text-xs sm:text-sm uppercase font-light link--metis"
              href={link.href}
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Legal = () => {
  const { t } = useTranslation("footer");

  return (
    <div className="flex flex-col items-end md:items-start">
      <div
        className={`flex flex-row items-center gap-1 justify-center opacity-80`}
      >
        <SmallText className="">© {new Date().getFullYear()} XTONE</SmallText>
        <Link href="/urbatek/legal">
          <a className="link--metis ml-2">
            <SmallText>{t("legal")}</SmallText>
          </a>
        </Link>
      </div>
      <SmallText>
        <b>Todos los derechos reservados</b>
      </SmallText>
    </div>
  );
};

export default Footer;
