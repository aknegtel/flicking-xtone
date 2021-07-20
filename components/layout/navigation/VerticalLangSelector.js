import Link from "next/link";
import { useRouter } from "next/router";
import { ES, EN, FR } from "../../../locales/supported_languages";

const LanguageSelector = ({ lang, changeLang }) => {
  const router = useRouter();
  const link =
    "select-none lang font-secondary text-black text-xs sm:text-sm uppercase font-bold link--metis";
  const active = link + " active";

  let path = router.pathname;
  if (router.pathname === "/collections/[id]")
    path = `/collections/${router.query.id}`;
  if (router.pathname === "/blog/posts/[slug]")
    path = `/blog/posts/${router.query.slug}`;

  if (router.pathname === "/blog/categories/[category]")
    path = `/blog/categories/${router.query.category}`;

  return (
    <>
      <div className="lang-menu flex flex-col items-center">
        <p className="active-lang select-none font-secondary text-white text-xs sm:text-sm uppercase font-bold ">
          <span className="tracking-200 mr-tracking">{lang}</span>
        </p>
        <div className="lang-options py-3 px-5 rounded-sm text-black bg-white absolute mt-6 flex flex-col items-start transition-all">
          <Link href={path} locale={ES}>
            <a
              className={lang === ES ? active : link}
              onClick={() => changeLang(ES)}
            >
              <div className="tracking-200 mr-tracking">ES</div>
            </a>
          </Link>

          <Link href={path} locale={EN}>
            <a
              className={lang === EN ? active : link}
              onClick={() => changeLang(EN)}
            >
              <div className="tracking-200 mr-tracking">EN</div>
            </a>
          </Link>

          <Link href={path} locale={FR}>
            <a
              className={lang === FR ? active : link}
              onClick={() => changeLang(FR)}
            >
              <div className="tracking-200 mr-tracking">FR</div>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .lang:not(:first-child) {
          margin-top: 0.3rem;
        }

        .lang:not(:last-child) {
          margin-bottom: 0.3rem;
        }

        .lang-options {
          opacity: 0;

          transform-origin: top;
          background-color: white;
          background-blend-mode: normal;
          z-index: 12;
          transform: scale(0);
          visibility: hidden;
        }

        .lang-menu:hover .lang-options,
        .lang-menu:active .lang-options {
          opacity: 1;
          transform: scale(1);
          visibility: visible;
        }

        .lang-separator {
          position: relative;
        }

        .lang-separator::after {
          content: "";
          position: absolute;
          background-color: #fff;
          width: 1px;
          height: 1.3rem;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 0;
        }

        @media (min-width: 1024px) {
          .lang-separator::after {
            height: 1.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default LanguageSelector;
