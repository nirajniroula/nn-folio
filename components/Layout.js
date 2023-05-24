import Footer from "./Layout/Footer";
import DrawerMenu from "./Nav/DrawerMenu";
import MenuButton from "./Nav/MenuButton";
import NavDesktop from "./Nav/NavDesktop";
import NavTitle from "./Nav/NavTitle";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="navbar sticky top-0 z-10 w-full justify-between bg-white px-4 drop-shadow-lg md:px-8 ">
          <NavTitle text={settings.data.siteTitle} />
          <NavDesktop navigation={navigation} />
          <MenuButton />
        </div>
        {/* <!-- Page content here --> */}
        <main>{children}</main>
        <Footer />
      </div>
      <DrawerMenu navigation={navigation} />
    </div>
  );
};
