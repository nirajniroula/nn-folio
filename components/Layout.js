import * as prismicH from "@prismicio/helpers";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Layout/Footer";
import DrawerMenu from "./Nav/DrawerMenu";
import MenuButton from "./Nav/MenuButton";
import NavDesktop from "./Nav/NavDesktop";
import NavTitle from "./Nav/NavTitle";

export const Layout = ({ navigation, settings, page, children }) => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const onToggleTheme = () => {
    toggleTheme();
  };
  return (
    <>
      <NextSeo
        title={prismicH.asText(page.data.meta_title)}
        description={prismicH.asText(page.data.meta_description)}
        openGraph={{
          title: prismicH.asText(page.data.meta_title),
          description: prismicH.asText(page.data.meta_description),
          site_name: prismicH.asText(page.data.meta_title),
        }}
        noindex={page.data.no_index || true}
        nofollow={page.data.no_follow || true}
      />
      <div className="drawer drawer-end" data-theme={currentTheme}>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="navbar sticky top-0 z-10 w-full justify-between bg-base-100 px-4 drop-shadow-lg md:px-8 ">
            <NavTitle text={settings.data.siteTitle} />
            <NavDesktop
              navigation={navigation}
              theme={currentTheme}
              onThemeChange={onToggleTheme}
            />
            <MenuButton />
          </div>
          {/* <!-- Page content here --> */}
          <main className="flex grow flex-col justify-center">{children}</main>
          <Footer />
        </div>
        <DrawerMenu
          navigation={navigation}
          theme={currentTheme}
          onThemeChange={onToggleTheme}
        />
      </div>
    </>
  );
};
