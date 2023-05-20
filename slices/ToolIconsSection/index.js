import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";

/**
 * @typedef {import("@prismicio/client").Content.ToolIconsSectionSlice} ToolIconsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ToolIconsSectionSlice>} ToolIconsSectionProps
 * @param {ToolIconsSectionProps}
 */
const ToolIconsSection = ({ slice }) => {
  console.log(">>>", slice);
  return (
    <Bounded as="section" className="bg-white">
      <div className="flex flex-col items-center justify-center gap-8">
        <h4 className="mb-4 text-3xl font-medium">{slice.primary.title}</h4>
        <div className="grid grid-cols-3 place-content-center gap-8 md:grid-cols-8">
          {slice.items.map((item) => (
            <div key={item.logo.url} className="h-24 w-24">
              <PrismicNextImage
                field={item.logo}
                sizes="100vw"
                className="w-full "
              />
            </div>
            // <ImageCard key={item.image.url} item={item} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ToolIconsSection;