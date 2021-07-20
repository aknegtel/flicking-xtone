import Link from "next/link";
import { useRouter } from "next/router";
import { ES, EN, FR } from "../../../locales/supported_languages";

const LanguageSelector = ({ lang, changeLang }) => {
  const router = useRouter();
  const link =
    "select-none jsx-lang font-secondary text-white text-xs sm:text-sm uppercase font-bold link--metis";
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
      <div className="flex transition-all">
        <Link href={path} locale={ES}>
          <a
            className={lang === ES ? active : link}
            onClick={() => changeLang(ES)}
          >
            <div className="tracking-200 mr-tracking">ES</div>
          </a>
        </Link>

        <div className="jsx-lang jsx-lang-separator"></div>

        <Link href={path} locale={EN}>
          <a
            className={lang === EN ? active : link}
            onClick={() => changeLang(EN)}
          >
            <div className="tracking-200 mr-tracking">EN</div>
          </a>
        </Link>

        <div className="jsx-lang jsx-lang-separator"></div>

        <Link href={path} locale={FR}>
          <a
            className={lang === FR ? active : link}
            onClick={() => changeLang(FR)}
          >
            <div className="tracking-200 mr-tracking">FR</div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .jsx-lang:not(:last-child) {
          margin-right: 0.75rem;
        }

        .jsx-lang-separator {
          position: relative;
        }

        .jsx-lang-separator::after {
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
          .jsx-lang-separator::after {
            height: 1.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default LanguageSelector;
