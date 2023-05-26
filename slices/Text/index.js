import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => {
  const containerStyle = slice.primary.css_classes;
  return (
    <Bounded
      as="section"
      className={clsx("bg-base-0 leading-relaxed ", containerStyle)}
    >
      <div
        className={clsx(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6"
        )}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default Text;
