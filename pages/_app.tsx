// Global stylesheets
import "styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { SWRConfig } from "swr";
import fetcher from "lib/fetcher";

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_SG",
          url: process.env.NEXT_PUBLIC_SITE_URL,
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
          images: [
            {
              url: "https://og-image.vercel.app/raphtlw%2F**next-starter**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg",
              alt: "raphtlw/next-starter",
            },
          ],
        }}
        twitter={{
          handle: "@raphtlw",
          site: "@raphtlw",
          cardType: "summary_large_image",
        }}
        titleTemplate={`%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        defaultTitle="Next.js Template"
        description="Next.js starter template"
        canonical={process.env.NEXT_PUBLIC_SITE_URL}
        additionalLinkTags={[{ rel: "icon", href: "/favicon.ico" }]}
      />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default NextApp;
