import "../styles/sass/main.scss";
import Router, { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { appWithTranslation, useTranslation } from "next-i18next";
import { PageTransition } from "next-page-transitions";
import { CollectionFilterProvider } from "../helpers/CollectionFilter.context";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Cursor from "../components/Cursor";

import CookieConsent from "react-cookie-consent";
import Paragraph from "../components/typography/Paragraph";
import { toast, ToastContainer } from "react-toastify";
import { XtoneAltissimaProvider } from "../helpers/XtoneAltissima.context";
const PopupUpgradeVersion = dynamic(
  () => import("../components/PopupUpgradeVersion"),
  { ssr: false }
);

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function XTONE({ Component, pageProps }) {
  const router = useRouter();
  const { t } = useTranslation("footer");

  return (
    <>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <PopupUpgradeVersion />

      <CookieConsent
        location="bottom"
        buttonText={t("cookieAccept")}
        cookieName="acceptsCookies"
        overlay={true}
        style={{ background: "#fff", padding: "2rem" }}
        buttonStyle={{ color: "#000", background: "#fff", fontSize: "13px" }}
      >
        <Paragraph style={{ color: "#000" }}>{t("cookieText")}</Paragraph>
      </CookieConsent>
      <Cursor />
      <CollectionFilterProvider>
        <XtoneAltissimaProvider>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </XtoneAltissimaProvider>
      </CollectionFilterProvider>

      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <style jsx global>{`
        .Toastify__toast {
          font-size: 0.875rem /* 14px */;
          line-height: 1.25rem /* 20px */;
        }

        .text-shadow {
          text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
        }

        .page-transition-enter {
          opacity: 0;
        }

        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms cubic-bezier(0.76, 0, 0.24, 1);
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 0ms cubic-bezier(0.76, 0, 0.24, 1);
        }

        .link--metis {
          position: relative;
          white-space: nowrap;
        }

        .link--metis::before,
        .link--metis::after {
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: white;
          top: 95%;
          left: 0;
          pointer-events: none;
        }

        .link--metis::before {
          content: "";
          transform-origin: 100% 50%;
          transform: scale3d(0, 1, 1);
          transition: transform 0.3s;
        }

        .link--metis:hover::before {
          transform-origin: 0% 50%;
          transform: scale3d(1, 1, 1);
        }

        .link--metis.active::before {
          position: absolute;
          width: 100%;
          height: 1px;
          mix-blend-mode: difference;
          top: 95%;
          left: 0;
          transform-origin: 0% 50%;
          transform: scale3d(1, 1, 1);
        }

        @media (min-width: 640px) {
          .button-line::after {
            transition: all 0.2s ease;
            content: "";
            position: absolute;
            top: 50%;
            right: -3rem;
            z-index: 1;
            width: 2rem;
            height: 0.1rem;
            background-color: #fff;
            pointer-events: none;
          }

          .button-line:hover::after,
          .button-line:focus::after {
            width: 12rem;
            right: -14rem;
          }
        }
      `}</style>
    </>
  );
}

export default appWithTranslation(XTONE);
