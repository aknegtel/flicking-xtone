import React from "react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import CollectionFilterContext, {
  surfaceTypeOptions,
} from "../../../helpers/CollectionFilter.context";
import dynamic from "next/dynamic";
import { useState } from "react";
import XtoneAltissimaContext from "../../../helpers/XtoneAltissima.context";

const Social = dynamic(() => import("../../Social"));
const Link = dynamic(() => import("next/link"));

const FullScreenNav = ({ toggleMenu, open }) => {
  const { t } = useTranslation("menu");

  const mainItems = [
    {
      title: t("home.title"),
      href: "/",
      items: [
        {
          title: t("home.spaces.title"),
          items: [
            { text: t("home.spaces.kitchen"), href: "/spaces/kitchen" },
            { text: t("home.spaces.living"), href: "/spaces/living" },
            { text: t("home.spaces.contract"), href: "/spaces/contract" },
          ],
        },
        {
          title: t("home.projects.title"),
          items: [{ text: t("home.projects.viewAll"), href: "/projects" }],
        },
      ],
    },
    {
      title: t("whyXtone.title"),
      href: "/why-xtone",
      items: [
        {
          title: t("whyXtone.surfaces.title"),
          items: [
            {
              text: t("whyXtone.surfaces.sintered"),
              href: "/why-xtone",
              onClick: () => setAltissima(false),
            },
            {
              text: t("whyXtone.surfaces.natural"),
              href: "/why-xtone",
              onClick: () => setAltissima(true),
            },
          ],
        },
        {
          title: t("whyXtone.advantages.title"),
          href: "/why-xtone#advantages",
        },
      ],
    },
    {
      title: t("product.title"),
      items: [
        {
          title: t("product.sintered.title"),
          items: [
            {
              text: t(`product.sintered.${surfaceTypeOptions[0].value}`),
              href: "/collections",
              onClick: () => changeSurface(surfaceTypeOptions[0].value, true),
            },
            {
              text: t(`product.sintered.${surfaceTypeOptions[1].value}`),
              href: "/collections",
              onClick: () => changeSurface(surfaceTypeOptions[1].value, true),
            },
            {
              text: t(`product.sintered.${surfaceTypeOptions[2].value}`),
              href: "/collections",
              onClick: () => changeSurface(surfaceTypeOptions[2].value, true),
            },
            {
              text: t(`product.sintered.${surfaceTypeOptions[3].value}`),
              href: "/collections",
              onClick: () => changeSurface(surfaceTypeOptions[3].value, true),
            },
            {
              text: t(`product.sintered.${surfaceTypeOptions[4].value}`),
              href: "/collections",
              onClick: () => changeSurface(surfaceTypeOptions[4].value, true),
            },
            {
              text: t(`product.sintered.${surfaceTypeOptions[5].value}`),
              href: "/collections",
              onClick: () => changeSurface(surfaceTypeOptions[5].value, true),
            },
            {
              text: t("product.sintered.viewAll"),
              href: "/collections",
              style: "mt-2 italic font-medium",
              onClick: () => clearAllFilters(),
            },
          ],
          extraItems: [{ text: "XLIGHT 3,5MM", href: "/collections/xlight" }],
        },
        {
          title: t("product.natural.title"),
          items: [
            {
              text: t("product.natural.alabaster"),
              href: "https://www.altissimastone.com/products/alabaster/",
            },
            {
              text: t("product.natural.granite"),
              href: "https://www.altissimastone.com/products/granite/",
            },
            {
              text: t("product.natural.limestone"),
              href: "https://www.altissimastone.com/products/limestone/",
            },
            {
              text: t("product.natural.marble"),
              href: "https://www.altissimastone.com/products/marble/",
            },
            {
              text: t("product.natural.quartzite"),
              href: "https://www.altissimastone.com/products/quartzite/",
            },
          ],
        },
        {
          title: t("product.bathandtables.title"),
          items: [
            {
              text: t("product.bathandtables.tables"),
              href: "https://www.xtone-surface.com/product/mesas",
            },
            {
              text: t("product.bathandtables.bathtubs"),
              href: "https://www.xtone-surface.com/product/baneras",
            },
            {
              text: t("product.bathandtables.showers"),
              href: "https://www.xtone-surface.com/product/platos-de-ducha",
            },
            {
              text: t("product.bathandtables.basins"),
              href: "https://www.xtone-surface.com/product/lavabos",
            },
          ],
        },
      ],
    },
    {
      title: t("downloads.title"),
      href: "/downloads",
      items: [
        {
          title: t("downloads.catalogs.title"),
          items: [
            {
              text: t("downloads.catalogs.viewCatalogs"),
              href: "/downloads#catalogs",
            },
          ],
        },
        {
          title: t("downloads.documentation.title"),
          items: [
            {
              text: t("downloads.documentation.viewFilter"),
              href: "/downloads#product-documentation-filter",
            },
          ],
        },
      ],
    },
    {
      title: t("blog.title"),
      href: "/blog",
      items: [
        {
          title: t("blog.latest.title"),
          items: [
            {
              text: t("blog.latest.first"),
              href: "/blog/posts/arch-recovery",
            },
            {
              text: t("blog.latest.second"),
              href: "/blog/posts/xtone-altissima",
            },
            {
              text: t("blog.latest.third"),
              href: "/blog/posts/thaizou-hanover",
            },
            {
              text: t("blog.latest.more"),
              href: "/blog/",
            },
          ],
        },
        {
          title: t("blog.categories.title"),
          items: [
            {
              text: t("blog.categories.events"),
              href: "/blog/categories/events",
            },
            {
              text: t("blog.categories.trends"),
              href: "/blog/categories/trends",
            },
            {
              text: t("blog.categories.product"),
              href: "/blog/categories/product",
            },
            {
              text: t("blog.categories.showroom"),
              href: "/blog/categories/showrooms",
            },
          ],
        },
      ],
    },
    {
      title: t("client.title"),
      items: [
        {
          title: t("client.private.title"),
          items: [
            { text: t("client.private.maintenance"), href: "/maintenance" },
          ],
        },
        // {
        //   title: "Professional",
        //   items: [],
        // },
        {
          title: t("client.employee.title"),
          items: [{ text: t("client.employee.login"), href: "/access/login" }],
        },
      ],
    },
    { title: t("contact.title"), href: "/contact", items: [] },
  ];

  const { changeSurface, clearAllFilters } = useContext(
    CollectionFilterContext
  );
  const { setAltissima } = useContext(XtoneAltissimaContext);
  // state uses the index of the
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <div
        className={`bg-white text-black transition-height duration-500 ease-easing z-30 fixed block top-0 left-0 w-screen overflow-hidden ${
          open ? "h-screen" : "h-0"
        }`}
      >
        <div className="nav-container ml-auto h-full flex mt-28 xl:mt-32 select-none">
          <div className="overflow-scroll flex flex-col gap-5 md:gap-7 mb-56 xl:mb-64">
            {mainItems.map((category, index) => {
              let number = index + 1;
              if (index < 9) number = "0" + number;

              return category.href ? (
                <Link key={index} href={category.href}>
                  <a
                    onMouseOver={() => setActiveItem(index)}
                    className={`flex gap-2  text-black`}
                  >
                    <h6 className="font-primary opacity-10 absolute md:relative md:opacity-10 text-5xl md:text-3xl">
                      {number}
                    </h6>
                    <h3
                      className={`font-primary italic text-3xl sm:text-5xl transition-opacity duration-500 ease-in  md:text-6xl xl:text-7xl ${
                        index === activeItem ? "opacity-100" : "opacity-20"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </a>
                </Link>
              ) : (
                <div
                  key={index}
                  onMouseOver={() => setActiveItem(index)}
                  className={`cursor-default flex gap-2  `}
                >
                  <h6 className="font-primary opacity-10 absolute md:relative md:opacity-10 text-5xl md:text-3xl">
                    {number}
                  </h6>
                  <h3
                    className={`font-primary italic text-3xl sm:text-5xl md:text-6xl transition-opacity duration-500 ease-in  xl:text-7xl ${
                      index === activeItem ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="flex-1 flex flex-col justify-between md:mr-10 lg:mr-16 mb-56 xl:mb-64">
            <div className="overflow-scroll w-full text-right">
              {mainItems
                .filter((_, index) => index === activeItem)
                .map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-default flex flex-col justify-end gap-10"
                    >
                      {category.items.map((item, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="cursor-default flex flex-col items-end"
                            >
                              {item.href ? (
                                <Link href={item.href}>
                                  <a className="text-black font-bold text-xs sm:text-sm uppercase mb-2 tracking-widest">
                                    {item.title}
                                  </a>
                                </Link>
                              ) : (
                                <p className="font-bold text-xs sm:text-sm uppercase mb-2 tracking-widest">
                                  {item.title}
                                </p>
                              )}
                              {item.items &&
                                item.items.map((link, index) => (
                                  <Link key={index} href={link.href}>
                                    <a
                                      onClick={link.onClick}
                                      className={`text-black text-xs sm:text-sm uppercase tracking-widest ${
                                        link.style && link.style
                                      }`}
                                    >
                                      {link.text}
                                    </a>
                                  </Link>
                                ))}
                              {item.extraItems && (
                                <div className="flex flex-col items-end">
                                  <div className="h-px opacity-50 bg-black w-12 my-6"></div>
                                  {item.extraItems.map((extraItem, index) => (
                                    <Link key={index} href={extraItem.href}>
                                      <a className="text-black text-xs sm:text-sm uppercase tracking-widest">
                                        {extraItem.text}
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
            <div className="ml-auto mt-12 w-max">
              <Social dark />
            </div>
          </div>

          <div className="nav-image-container hidden md:block">
            <img
              className="h-full w-full object-cover"
              src="/static/images/hero/blog.webp"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-container {
          width: 90%;
          margin-right: auto;
          margin-left: auto;
        }

        @media (min-width: 801px) {
          /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
          .nav-container {
            width: 95%;
            margin-right: 0;
            margin-left: auto;
          }
        }

        .nav-image-container {
          width: 25%;
        }
      `}</style>
    </>
  );
};

export default FullScreenNav;
