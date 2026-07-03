import Script from "next/script";

/**
 * Analytics — configurable, privacy-respecting. Loads Google Analytics and/or
 * Plausible only when their env vars are set; renders nothing otherwise.
 *   NEXT_PUBLIC_GA_ID           e.g. G-XXXXXXX
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN e.g. daric.agency
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
      {plausibleDomain && (
        <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      )}
    </>
  );
}
