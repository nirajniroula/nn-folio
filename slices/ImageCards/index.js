import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";
import { ConditionalWrap } from "../../components/ConditionalWrap";

const ImageCard = ({ item }) => {
  const image = item.image;
  console.log("...", item);
  return (
    <li className="grid gap-8">
      <div className="card w-full overflow-hidden bg-white shadow-xl">
        {prismicH.isFilled.image(image) && (
          <ConditionalWrap
            condition={prismicH.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex="-1">
                {children}
              </PrismicLink>
            )}
          >
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </ConditionalWrap>
        )}
        <div className="card-body">
          <h2 className="card-title mb-4">
            {item.title}

            <div className="badge-secondary badge">{item.platform}</div>
          </h2>
          <p className="line-clamp-3">
            <PrismicRichText field={item.text} />
          </p>
          <div className="card-actions mt-4 justify-end">
            {item.tags.map((tag) => (
              <div key={tag.text} className="badge-outline badge">
                {tag.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

const ImageCards = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white">
      <div className="grid gap-12">
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        {prismicH.isFilled.richText(slice.primary.description) && (
          <div className="font-medium leading-relaxed">
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}

        <ul className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          {slice.items.map((item) => (
            <ImageCard key={item.image.url} item={item} />
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default ImageCards;
