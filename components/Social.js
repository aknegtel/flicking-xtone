import dynamic from "next/dynamic";

const LogoInstagram = dynamic(() =>
  import("../public/logos/brands/instagram.svg")
);
const LogoFacebook = dynamic(() =>
  import("../public/logos/brands/facebook.svg")
);
const LogoLinkedin = dynamic(() =>
  import("../public/logos/brands/linkedin.svg")
);
const LogoYoutube = dynamic(() => import("../public/logos/brands/youtube.svg"));

const Social = ({ dark, narrow }) => {
  let styles = `transition-all hover:opacity-50 active:opacity-50 focus:opacity-50 fill-current ${
    dark ? "text-black" : "text-white"
  }`;

  return (
    <div className={`flex items-center ${narrow ? "gap-3" : "gap-5"}`}>
      <a
        href="https://www.instagram.com/xtone_surface/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoInstagram className={`${styles}  h-4 md:h-5 `} />
      </a>
      <a
        href="https://www.facebook.com/xtone.surface"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoFacebook
          className={`${styles}  h-4 md:h-5 `}
          href="https://www.facebook.com/xtone.surface"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/xtone-surface/?viewAsMember=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoLinkedin className={`${styles}  h-4 md:h-5 `} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCblK9W7GaoXTcgNdcVmnUiQ/featured"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoYoutube className={`${styles} h-4 md:h-6 `} />
      </a>
    </div>
  );
};

export default Social;
