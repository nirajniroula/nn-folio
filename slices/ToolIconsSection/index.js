import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import clsx from "clsx";
import { getRandomAnim } from "../../utils/string";

/**
 * @typedef {import("@prismicio/client").Content.ToolIconsSectionSlice} ToolIconsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ToolIconsSectionSlice>} ToolIconsSectionProps
 * @param {ToolIconsSectionProps}
 */
const ToolIconsSection = ({ slice }) => {
  return (
    <Bounded as="section">
      <div className="flex flex-col items-center justify-center gap-8">
        <h4 className="mb-4 text-3xl font-medium">{slice.primary.title}</h4>
        <div className="grid grid-cols-3 place-content-center gap-16 md:grid-cols-7">
          {slice.items.map((item) => {
            const randAnim = getRandomAnim();
            return (
              <div
                key={item.logo.url}
                className={clsx("md:h-18 md:w-18 h-12 w-12", randAnim)}
              >
                <PrismicNextImage
                  field={item.logo}
                  sizes="100vw"
                  className="w-full "
                />
              </div>
            );
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default ToolIconsSection;
