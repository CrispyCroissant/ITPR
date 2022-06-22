export interface UnsplashResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  promotedAt: Date;
  width: number;
  height: number;
  color: string;
  blurHash: string;
  description: string;
  altDescription: string;
  urls: Urls;
  links: UnsplashResponseLinks;
  categories: any[];
  likes: number;
  likedByUser: boolean;
  currentUserCollections: any[];
  sponsorship: null;
  topicSubmissions: TopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  views: number;
  downloads: number;
}

interface Exif {
  make: string;
  model: string;
  name: string;
  exposureTime: string;
  aperture: string;
  focalLength: string;
  iso: number;
}

interface UnsplashResponseLinks {
  self: string;
  html: string;
  download: string;
  downloadLocation: string;
}

interface Location {
  title: null;
  name: null;
  city: null;
  country: null;
  position: Position;
}

interface Position {
  latitude: null;
  longitude: null;
}

interface TopicSubmissions {
  people: People;
}

interface People {
  status: string;
  approvedOn: Date;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  smallS3: string;
}

interface User {
  id: string;
  updatedAt: Date;
  username: string;
  name: string;
  firstName: string;
  lastName: string;
  twitterUsername: string;
  portfolioURL: string;
  bio: string;
  location: string;
  links: UserLinks;
  profileImage: ProfileImage;
  instagramUsername: string;
  totalCollections: number;
  totalLikes: number;
  totalPhotos: number;
  acceptedTos: boolean;
  forHire: boolean;
  social: Social;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social {
  instagramUsername: string;
  portfolioURL: string;
  twitterUsername: string;
  paypalEmail: null;
}
