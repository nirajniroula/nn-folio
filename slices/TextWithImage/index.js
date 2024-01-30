import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded yPadding="sm">
      <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
        <div>
          {prismicH.isFilled.image(image) && (
            <div className="max-h-80 card overflow-hidden border-base-100 bg-gray-100">
              <PrismicNextImage
                field={image}
                sizes="100vw"
                className="w-full"
              />
            </div>
          )}
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col ">
            <h2 className="mb-4 text-4xl">
              {slice.primary.title}
              <div className="badge-secondary badge mx-4">
                {slice.primary.platform}
              </div>
            </h2>
            <p className="line-clamp-3">
              <PrismicRichText field={slice.primary.about} />
            </p>
            <div className="my-8 flex">
              {prismicH.isFilled.link(slice.primary.button_link) && (
                <PrismicLink
                  field={slice.primary.button_link}
                  className="w-full rounded bg-white px-5 py-3 text-center font-medium text-slate-800 md:w-auto"
                >
                  {slice.primary.button_text || "View Project"}
                </PrismicLink>
              )}
            </div>
          </div>

          <div className="card-actions mt-4 justify-end">
            {slice.primary.tags.map((tag) => (
              <div key={tag.text} className="badge-outline badge">
                {tag.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="card-title mb-4 mt-10">Responsibilities/Contribution</h2>
      <div className="mb-8  h-[0.5px] w-full bg-gray-400"></div>
      <p className="">
        <PrismicRichText field={slice.primary.text} />
      </p>
    </Bounded>
  );
};

export default TextWithImage;
