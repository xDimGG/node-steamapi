export default class GameDetails {
  /** Type of app. Usually "game" */
  type: string;

  /** Display name of the app */
  name: string;

  /** App ID for this game */
  id: number;

  /** Age restriction for purchasing */
  requiredAge: number;

  /** If this game is free */
  isFree: boolean;

  /**
   * Enum indicating level of support. E.G. "full"
   * NOTE: I'm not sure what the possible values are
  */
  controllerSupport: string;

  /** List of DLC app IDs for this game */
  dlc: number[];

  /**
   * Detailed HTML from main body of the store page
   * NOTE: This appears to be the same as aboutTheGame
  */
  detailedDescription: string;

  /**
   * Detailed HTML from main body of the store page
   * NOTE: This appears to be the same as detailedDescription
  */
  aboutTheGame: string;

  /** Short description of the game under the game banner on the store page */
  shortDescription: string;

  /** Supported languages in game */
  supportedLanguages: string;

  /** URL to the header image */
  headerImage: string;

  /** URL to the capsule image 231x87px */
  capsuleImage: string;

  /** URL to the capsule image 184x69px */
  capsuleImagev5: string;

  /** URL to the game's website */
  website: string;

  /** HTML specs for minimum and recommended PC hardware */
  pcRequirements: { minimum: string; recommended: string };

  /** HTML specs for minimum and recommended Mac hardware */
  macRequirements: { minimum: string; recommended: string };

  /** HTML specs for minimum and recommended Linux hardware */
  linuxRequirements: { minimum: string; recommended: string };

  /** Legal notice for the game */
  legalNotice: string;

  /** Array of developer names */
  developers: string[];

  /** Array of publisher names */
  publishers: string[];

  /** Price overview including discounts. Calculated in the given currency when requesting app details */
  priceOverview: {
    currency: string;
    initial: number;
    final: number;
    discountPercent: number;
    initialFormatted: string;
    finalFormatted: string;
  };

  /** Array of IDs for the purchasing options of the game */
  packages: number[];

  /** Array of package groups containing purchase details for each package */
  packageGroups: {
    name: string;
    title: string;
    description: string;
    selectionText: string;
    saveText: string;
    displayType: number;
    isRecurringSubscription: string;
    subs: {
      packageid: number;
      percentSavingsText: string;
      percentSavings: number;
      optionText: string;
      optionDescription: string;
      canGetFreeLicense: string;
      isFreeLicense: boolean;
      priceInCentsWithDiscount: number;
    }[];
  }[];

  /** Supported platforms */
  platforms: { windows: boolean; mac: boolean; linux: boolean; };

  /** Metacritic score and website URL */
  metacritic: { score: number; url: string; };

  /** Array of Steam categories with IDs and short descriptions */
  categories: { id: number; description: string }[];

  /**
   * Array of Steam genres with IDs and short descriptions
   * NOTE: ID is a string for genres rather than a number like most other ID in Steam
  */
  genres: { id: string; description: string }[];

  /** Array of screenshot thumbnail and full path URLs */
  screenshots: { id: number; path_thumbnail: string; path_full: string }[];

  /** Array of movie information including thumbnail and video URLs */
  movies: {
    id: number;
    name: string;
    thumbnail: string;
    webm: { '480': string; max: string };
    mp4: { '480': string; max: string };
    highlight: boolean;
  }[];

  /** Number of positive reviews */
  recommendations: { total: number };

  /** Number of achievements and array of achievements from the right column of the store page */
  achievements: { total: number; highlighted: { name: string; path: string }[] };

  /** Release date information */
  releaseDate: { coming_soon: boolean; date: string };

  /** Support information including URL and email */
  supportInfo: { url: string; email: string };

  /** Background image URL scaled for store page */
  background: string;

  /** Raw background image URL */
  backgroundRaw: string;

  /** Unsure what this is. It has always been an empty array of ids and null notes for games tested */
  contentDescriptors: { ids: number[]; notes: string | null };

  /**
   * Ratings for different rating systems
   * NOTE: These appear to have a different object structure based on the game
  */
  ratings: any;

  constructor(data: any) {
    this.type = data.type;
    this.name = data.name;
    this.id = data.steam_appid;
    this.requiredAge = data.required_age;
    this.isFree = data.is_free;
    this.controllerSupport = data.controller_support;
    this.dlc = data.dlc;
    this.detailedDescription = data.detailed_description;
    this.aboutTheGame = data.about_the_game;
    this.shortDescription = data.short_description;
    this.supportedLanguages = data.supported_languages;
    this.headerImage = data.header_image;
    this.capsuleImage = data.capsule_image;
    this.capsuleImagev5 = data.capsule_image;
    this.website = data.website;
    this.pcRequirements = data.pc_requirements;
    this.macRequirements = data.mac_requirements;
    this.linuxRequirements = data.linux_requirements;
    this.legalNotice = data.legal_notice;
    this.developers = data.developers;
    this.publishers = data.publishers;
    this.priceOverview = data.price_overview;
    this.packages = data.packages;
    this.packageGroups = data.package_groups;
    this.platforms = data.platforms;
    this.metacritic = data.metacritic;
    this.categories = data.categories;
    this.genres = data.genres;
    this.screenshots = data.screenshots;
    this.movies = data.movies;
    this.recommendations = data.recommendations;
    this.achievements = data.achievements;
    this.releaseDate = data.release_date;
    this.supportInfo = data.support_info;
    this.background = data.background;
    this.backgroundRaw = data.background_raw;
    this.contentDescriptors = data.content_descriptors;
    this.ratings = data.ratings;
  }
}
