import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

/**
 * @typedef {import("@prismicio/client").Content.ButtonSlice} ButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ButtonSlice>} ButtonProps
 * @param {ButtonProps}
 */
const Button = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded yPadding="null" className="relative">
        <div className="grid justify-items-center gap-8">
          {prismicH.isFilled.link(slice.primary.button_url) && (
            <PrismicLink
              field={slice.primary.button_url}
              className="rounded bg-white px-5 py-3 font-medium text-slate-800"
            >
              {slice.primary.button_text || "More"}
            </PrismicLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Button;
