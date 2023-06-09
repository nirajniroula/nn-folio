import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Heading } from "../components/Heading";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import { ThemeProvider } from "../contexts/ThemeContext";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  BASE_URL,
  DEFAULT_SEO_DESCRIPTION,
  DEFAULT_SEO_TITLE,
} from "../config/constants";

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h1" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalURL = (
    BASE_URL + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalURL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrismicProvider
        internalLinkComponent={Link}
        richTextComponents={richTextComponents}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <DefaultSeo
            title={DEFAULT_SEO_TITLE}
            description={DEFAULT_SEO_DESCRIPTION}
          />
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
}
