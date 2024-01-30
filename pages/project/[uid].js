import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const Project = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings} page={page}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Project;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("project_details", params.uid, {
    lang: locale,
  });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("project_details", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}
