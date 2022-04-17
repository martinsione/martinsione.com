import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";

import seo from "@/lib/seo";
import Layout from "@/components/Layout";

import "../styles/globals.css";
import "../styles/prism.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <NextSeo {...seo} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
