import type { Session } from "next-auth";
import AppSideFooter from "./AppSideFooter";
import Link from "next/link";
import { useTranslation } from "@/src/hooks/useTranslation";

export default async function AppSide({
  session,
  language,
}: {
  language: string;
  session: Session | undefined;
}) {
  const { t } = await useTranslation(language, "common");

  return (
    <div
      id="page-aside"
      className="min-h-[55vh] md:h-screen w-full md:w-1/2 overflow-hidden flex flex-col justify-between gap-2 items-start bg-gradient-to-t from-zinc-900  dark:from-purple-800/40  to-zinc-900/90 dark:to-purple-800/20 bg-muted text-white dark:border-r dark:border-r-gray-800 p-10"
    >
      <div className="flex items-center justify-start text-lg text-white font-medium">
        <Link href={`/${language}`}>
          <div className="shrink-0">
            <div className="w-32 h-32">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 166 166"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g fill="currentColor">
                    <g transform="translate(3.000000, 3.000000)">
                      <path d="M28.9361702,95.5586108 L40.9733946,95.5586108 C52.6254278,95.5586108 58.2588488,88.3844251 58.2588488,78.7546456 C58.2588488,69.0767171 52.6254278,61.8543825 40.9733946,61.8543825 L28.9361702,61.8543825 L28.9361702,95.5586108 Z M35.6770159,89.4918497 L35.6770159,67.9211436 L40.1548633,67.9211436 C48.1475803,67.9211436 51.2772587,72.6397356 51.2772587,78.7546456 C51.2772587,84.8695555 48.1475803,89.4918497 40.1548633,89.4918497 L35.6770159,89.4918497 Z M62.8337117,95.5586108 L69.4301106,95.5586108 L69.4301106,81.9324728 C69.4301106,77.3583275 69.2856639,75.0953293 68.9486216,72.1582466 L80.1673148,95.5586108 L83.4414398,95.5586108 L94.6601329,72.1582466 C94.3230907,75.0953293 94.178644,77.3583275 94.178644,81.9324728 L94.178644,95.5586108 L100.775043,95.5586108 L100.775043,61.8543825 L92.6860281,61.8543825 L85.6562891,76.7323919 C83.2006953,81.9324728 82.3821641,84.0991732 81.948824,85.7362357 C81.467335,84.0991732 80.6488037,81.9324728 78.19321,76.7323919 L71.2116198,61.8543825 L62.8337117,61.8543825 L62.8337117,95.5586108 Z M118.737712,96.1845465 C126.393387,96.1845465 131.06383,92.0437413 131.06383,85.9288313 C131.06383,78.2250077 124.130389,76.4916474 120.182179,75.239776 C117.245096,74.324947 114.837651,73.5064157 114.837651,71.0026731 C114.837651,68.7396749 116.811756,67.2952079 119.508094,67.2952079 C122.011837,67.2952079 123.552602,68.4989304 125.189664,71.0989708 L130.967532,67.5359524 C128.463789,63.5877428 125.093366,61.2765957 119.845137,61.2765957 C112.7191,61.2765957 107.952359,65.2729542 107.952359,71.3397153 C107.952359,76.4434985 111.274633,79.476879 116.474714,80.8250482 C120.615519,81.8843239 124.178537,82.9435996 124.178537,86.3140225 C124.178537,88.6251696 122.252582,90.1659343 119.122903,90.1659343 C116.18582,90.1659343 113.393184,88.6733185 111.659824,85.2065978 L105.833807,88.9140629 C108.77089,94.065995 113.393184,96.1845465 118.737712,96.1845465 L118.737712,96.1845465 Z"></path>
                      <path d="M0,80 C0,35.81722 35.8075054,0 80,0 C124.18278,0 160,35.8075054 160,80 C160,124.18278 124.192495,160 80,160 C35.81722,160 0,124.192495 0,80 Z M16.4324324,80 C16.4324324,44.8926019 44.8848827,16.4324324 80,16.4324324 C115.107398,16.4324324 143.567568,44.8848827 143.567568,80 C143.567568,115.107398 115.115117,143.567568 80,143.567568 C44.8926019,143.567568 16.4324324,115.115117 16.4324324,80 Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </Link>
        <h1 className="select-none pl-2 max-w-[240px] font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {t("brandHeadline", { ns: "common" })}
        </h1>
      </div>
      <div className="max-w-[420px]">
        <blockquote className="mt-2 md:mt-44">
          <p className="text-lg font-extrabold select-none">
            {t("brandCaption", { ns: "common" })}{" "}
            <Link
              target="_blank"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              href="https://open-data-germany.org"
            >
              {t("brandCaptionLinkLabel", { ns: "common" })}
            </Link>
            .
          </p>
        </blockquote>
      </div>
      {/* @ts-ignore Server Component */}
      <AppSideFooter t={t} />
    </div>
  );
}