import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React from "react";

function DrawerMenu({ navigation }) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu w-80 bg-base-100 p-4">
        {/* <!-- Sidebar content here --> */}
        {navigation.data?.links.map((item) => (
          <li
            key={prismicH.asText(item.label)}
            className="font-semibold tracking-tight text-slate-800"
          >
            <PrismicLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrawerMenu;
