import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => {
  return (
    <Bounded
      as="section"
      className={clsx(
        `bg-base-0 leading-relaxed, ${slice.primary.css_classes}`
      )}
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
