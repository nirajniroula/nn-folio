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
            <div className="group card relative max-h-80 overflow-hidden border-base-100 bg-gray-100">
              <PrismicNextImage
                field={image}
                sizes="100vw"
                className="w-full"
              />
              <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>
              <div className="button-component absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                {prismicH.isFilled.link(slice.primary.button_link) && (
                  <PrismicLink
                    field={slice.primary.button_link}
                    className="rounded bg-white px-5 py-3 text-center font-medium text-slate-800"
                  >
                    {slice.primary.button_text || "View Project"}
                  </PrismicLink>
                )}
              </div>
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
            <p className="line-clamp-5">
              <PrismicRichText field={slice.primary.about} />
            </p>
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
      <h2 className="card-title mb-4 mt-16">Responsibilities</h2>
      <div className="mb-8  h-[1px] w-full bg-gray-400"></div>
      <p className="">
        <PrismicRichText field={slice.primary.text} />
      </p>
    </Bounded>
  );
};

export default TextWithImage;
