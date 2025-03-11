import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createClient } from "../prismicio";
import linkResolver from "../utils/linkResolver";

const SitemapIndex = () => null;

const Sitemap = ({ pages }) => {
  const origin = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {pages?.map((page, index) => {
        const lastModified = new Date(page.last_publication_date).toISOString();

        // special rule for the Homepage
        if (
          linkResolver(page) === "/" &&
          page.type === "page" &&
          page.uid === "home"
        ) {
          return (
            <url key={index}>
              <loc>{origin}/</loc>
              <lastmod>{lastModified}</lastmod>
            </url>
          );
        }

        if (
          (linkResolver(page) !== "/" || page.url) &&
          !(page.data.no_index === true)
        ) {
          const url = origin + (linkResolver(page) || page.url);

          return (
            <url key={index}>
              <loc>{url}</loc>
              <lastmod>{lastModified}</lastmod>
            </url>
          );
        }
      })}
    </urlset>
  );
};

export const getServerSideProps = async ({ res }) => {
  const client = createClient();
  const pages = await client.dangerouslyGetAll();
  res.setHeader("Content-Type", "text/xml");
  res.write(renderToStaticMarkup(<Sitemap pages={pages} />));
  res.end();

  return {
    props: {},
  };
};

export default SitemapIndex;
