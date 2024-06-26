/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type PlayerCharacterV2 = {
  _id: string;
  _type: "playerCharacterV2";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  player?: string;
  userId?: string;
  bloodline?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "bloodline";
  };
  origin?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "origin";
  };
  post?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "post";
  };
  edges?: Array<{
    edge?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "edge";
    };
    ranks?: number;
    _key: string;
  }>;
  skills?: Array<{
    skill?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "skill";
    };
    ranks?: number;
    _key: string;
  }>;
  languages?: Array<{
    language?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "language";
    };
    ranks?: number;
    _key: string;
  }>;
  salvage?: Array<{
    text?: string;
    tags?: Array<string>;
    _key: string;
  }>;
  specimens?: Array<{
    text?: string;
    tags?: Array<string>;
    _key: string;
  }>;
  whispers?: Array<{
    text?: string;
    tags?: Array<string>;
    _key: string;
  }>;
  charts?: Array<{
    text?: string;
    tags?: Array<string>;
    _key: string;
  }>;
  drives?: Array<string>;
  mires?: Array<{
    text?: string;
    currentTrack?: Array<number>;
    _key: string;
  }>;
  aspects?: Array<{
    name?: string;
    description?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    type?: "companion" | "gear" | "trait";
    isComplex?: boolean;
    trackLength?: number;
    currentTrack?: Array<number>;
    _key: string;
  }>;
  majorMilestones?: Array<string>;
  minorMilestones?: Array<string>;
  temporaryTracks?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterAspect";
  }>;
};

export type CharacterResource = {
  _id: string;
  _type: "characterResource";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  type?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "resourceType";
  };
  tags?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "keyValuePair";
  }>;
  description?: string;
};

export type ResourceType = {
  _id: string;
  _type: "resourceType";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  summary?: string;
  description?: string;
  uses?: Array<string>;
  tags?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "keyValuePair";
  }>;
  examples?: Array<string>;
};

export type PlayerCharacter = {
  _id: string;
  _type: "playerCharacter";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  player?: string;
  bloodline?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "bloodline";
  };
  origin?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "origin";
  };
  post?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "post";
  };
  edges?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "edge";
  }>;
  skills?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterAttribute";
  }>;
  languages?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterAttribute";
  }>;
  resources?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterResource";
  }>;
  drives?: Array<string>;
  mires?: Array<string>;
  aspects?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterAspect";
  }>;
  majorMilestones?: Array<string>;
  minorMilestones?: Array<string>;
  temporaryTracks?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterAspect";
  }>;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  summary?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  lore?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "keyValuePair";
  }>;
  questionsToConsider?: Array<string>;
  alternatePresentations?: string;
  quote?: string;
  aspects?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "aspect";
  }>;
  edges?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "edge";
  }>;
  skills?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "skill";
  }>;
  languages?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "language";
  }>;
  resource?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterResource";
  }>;
  mire?: Array<string>;
  drive?: Array<string>;
};

export type Origin = {
  _id: string;
  _type: "origin";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  summary?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  lore?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "keyValuePair";
  }>;
  questionsToConsider?: Array<string>;
  alternatePresentations?: string;
  quote?: string;
  aspects?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "aspect";
  }>;
  edges?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "edge";
  }>;
  skills?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "skill";
  }>;
  languages?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "language";
  }>;
  resource?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterResource";
  }>;
  mire?: Array<string>;
  drive?: Array<string>;
};

export type Bloodline = {
  _id: string;
  _type: "bloodline";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  summary?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  lore?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "keyValuePair";
  }>;
  questionsToConsider?: Array<string>;
  alternatePresentations?: string;
  quote?: string;
  aspects?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "aspect";
  }>;
  edges?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "edge";
  }>;
  skills?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "skill";
  }>;
  languages?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "language";
  }>;
  resource?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "characterResource";
  }>;
  mire?: Array<string>;
  drive?: Array<string>;
};

export type KeyValuePair = {
  _id: string;
  _type: "keyValuePair";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  key?: string;
  value?: string;
};

export type Edge = {
  _id: string;
  _type: "edge";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  displayName?: string;
  summary?: string;
  description?: string;
};

export type CharacterOption = {
  _id: string;
  _type: "characterOption";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  type?: "bloodline" | "origin" | "post";
  name?: string;
  summary?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  lore?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "keyValuePair";
  }>;
  questionsToConsider?: Array<string>;
  alternatePresentations?: string;
  quote?: string;
  aspects?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "aspect";
  }>;
};

export type CharacterAttribute = {
  _id: string;
  _type: "characterAttribute";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  attribute?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "skill";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "language";
  };
  ranks?: number;
};

export type Language = {
  _id: string;
  _type: "language";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  displayName?: string;
  description?: string;
  lore?: string;
};

export type Skill = {
  _id: string;
  _type: "skill";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  displayName?: string;
  description?: string;
  exampleUses?: Array<string>;
};

export type CharacterAspect = {
  _id: string;
  _type: "characterAspect";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  trackLength?: number;
  currentTRack?: Array<number>;
  type?: "companion" | "gear" | "trait";
  isComplex?: boolean;
};

export type Aspect = {
  _id: string;
  _type: "aspect";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  count?: number;
  type?: "companion" | "gear" | "trait";
};
export declare const internalGroqTypeReferenceTo: unique symbol;

