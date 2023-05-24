// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.TitleField;
  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Parent field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.parent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  parent: prismic.RelationField<"page">;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | HeroSlice
  | QuoteSlice
  | TextSlice
  | ImageSlice
  | ImageCardsSlice
  | TextWithImageSlice
  | ToolIconsSectionSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  siteTitle: prismic.TitleField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | NavigationDocument
  | PageDocument
  | SettingsDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.backgroundImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  backgroundImage: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceBannerPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceBanner = prismic.SharedSliceVariation<
  "banner",
  Simplify<ImageSliceBannerPrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in ImageCards → Primary
 *
 */
interface ImageCardsSliceDefaultPrimary {
  /**
   * Heading field in *ImageCards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.primary.heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  heading: prismic.RichTextField;
  /**
   * Description field in *ImageCards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
}
/**
 * Item in ImageCards → Items
 *
 */
export interface ImageCardsSliceDefaultItem {
  /**
   * Image field in *ImageCards → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Text field in *ImageCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *ImageCards → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *ImageCards → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
  /**
   * Platform field in *ImageCards → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Web
   * - **API ID Path**: image_cards.items[].platform
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  platform: prismic.SelectField<
    "Web" | "Android" | "iOS " | "Mobile(Android/iOS)",
    "filled"
  >;
  /**
   * Tags field in *ImageCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].tags
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tags: prismic.RichTextField;
  /**
   * Title field in *ImageCards → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
}
/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageCardsSliceDefaultPrimary>,
  Simplify<ImageCardsSliceDefaultItem>
>;
/**
 * Slice variation for *ImageCards*
 *
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;
/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: `ImageCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageCardsSlice = prismic.SharedSlice<
  "image_cards",
  ImageCardsSliceVariation
>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
  /**
   * Quote field in *Quote → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.primary.quote
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  quote: prismic.RichTextField;
  /**
   * Source field in *Quote → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.primary.source
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  source: prismic.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceTwoColumnsPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceTwoColumns = prismic.SharedSliceVariation<
  "twoColumns",
  Simplify<TextSliceTwoColumnsPrimary>,
  never
>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceDefaultPrimary {
  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceWithButtonPrimary {
  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *TextWithImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceWithButton = prismic.SharedSliceVariation<
  "withButton",
  Simplify<TextWithImageSliceWithButtonPrimary>,
  never
>;
/**
 * Slice variation for *TextWithImage*
 *
 */
type TextWithImageSliceVariation =
  | TextWithImageSliceDefault
  | TextWithImageSliceWithButton;
/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>;
/**
 * Primary content in ToolIconsSection → Primary
 *
 */
interface ToolIconsSectionSliceDefaultPrimary {
  /**
   * Title field in *ToolIconsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tool_icons_section.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
}
/**
 * Item in ToolIconsSection → Items
 *
 */
export interface ToolIconsSectionSliceDefaultItem {
  /**
   * Logo field in *ToolIconsSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tool_icons_section.items[].logo
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
}
/**
 * Default variation for ToolIconsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ToolIconsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ToolIconsSectionSliceDefaultPrimary>,
  Simplify<ToolIconsSectionSliceDefaultItem>
>;
/**
 * Slice variation for *ToolIconsSection*
 *
 */
type ToolIconsSectionSliceVariation = ToolIconsSectionSliceDefault;
/**
 * ToolIconsSection Shared Slice
 *
 * - **API ID**: `tool_icons_section`
 * - **Description**: `ToolIconsSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ToolIconsSectionSlice = prismic.SharedSlice<
  "tool_icons_section",
  ToolIconsSectionSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      SettingsDocumentData,
      SettingsDocument,
      AllDocumentTypes,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      ImageSliceDefaultPrimary,
      ImageSliceDefault,
      ImageSliceBannerPrimary,
      ImageSliceBanner,
      ImageSliceVariation,
      ImageSlice,
      ImageCardsSliceDefaultPrimary,
      ImageCardsSliceDefaultItem,
      ImageCardsSliceDefault,
      ImageCardsSliceVariation,
      ImageCardsSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceDefault,
      QuoteSliceVariation,
      QuoteSlice,
      TextSliceDefaultPrimary,
      TextSliceDefault,
      TextSliceTwoColumnsPrimary,
      TextSliceTwoColumns,
      TextSliceVariation,
      TextSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceDefault,
      TextWithImageSliceWithButtonPrimary,
      TextWithImageSliceWithButton,
      TextWithImageSliceVariation,
      TextWithImageSlice,
      ToolIconsSectionSliceDefaultPrimary,
      ToolIconsSectionSliceDefaultItem,
      ToolIconsSectionSliceDefault,
      ToolIconsSectionSliceVariation,
      ToolIconsSectionSlice,
    };
  }
}
