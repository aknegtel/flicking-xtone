import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Section = dynamic(() => import("../layout/Section"));
const FullscreenDividerLink = dynamic(() => import("../FullscreenDividerLink"));

const CareMaintenance = () => {
  const router = useRouter();
  const { t } = useTranslation("why-xtone");
  return (
    <>
      <Section className="my-12 md:my-24 lg:my-32 xl:my-48">
        <FullscreenDividerLink
          href="/maintenance"
          src="/static/images/prestaciones/cleaning.webp"
          alt="XTONE Product care and maintenance"
          title={
            router.locale === "en" ? (
              <>
                <span className="italic">
                  {t("care&maintenance.title.care")}
                </span>{" "}
                <span
                  className="not-italic"
                  style={{ display: "inline-block", transform: "skew(-13deg)" }}
                >
                  &
                </span>{" "}
                <span className="italic">
                  {t("care&maintenance.title.maintenance")}
                </span>
              </>
            ) : (
              <span className="italic">{t("care&maintenance.title")}</span>
            )
          }
          subtitle={t("care&maintenance.discover")}
          desaturated
          scrollSpeed={-0.78}
        />
      </Section>
    </>
  );
};

export default CareMaintenance;
