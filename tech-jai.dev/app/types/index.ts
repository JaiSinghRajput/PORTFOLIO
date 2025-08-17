// Base types
export interface TimestampFields {
  createdAt: Date|string;
  updatedAt: Date|string;
}
export interface PersonalInfo {
  name: string;
  email: string;
  avatar: string;
}
// About Model Types
export interface AboutPoint {
  point: string;
}

export interface AboutOverview {
  aboutTitle: string;
  content: string;
  points: AboutPoint[];
  resumeLink: string;
}

export interface AboutSkill {
  skillName: string;
  proficiency: number;
}

export interface AboutExperience {
  companyName: string;
  position: string;
  duration: string;
  description: string;
}

export interface About {
  _id: string;
  Overview: AboutOverview;
  Skills: AboutSkill[];
  Experience: AboutExperience[];
}

// Admin Model Types
export interface Admin {
  _id: string;
  adminUserName: string;
  adminPassword: string;
  lastLogin: string;
}

// Blog Model Types
export interface Blog extends TimestampFields {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  content: string;
  author: string;
  isPublished: boolean;
  isFeatured: boolean;
  isMain: boolean;
  readTime: number| null;
  tags: string[];
}

// Contact Info Model Types
export interface ContactDetail {
  key: string;
  value: string;
}

export interface ProfileLink {
  platform: string;
  link: string;
}

export interface ContactInfo extends TimestampFields {
  _id: string;
  title: string;
  description: string;
  details: ContactDetail[];
  profileLinks: ProfileLink[];
}

// Hero Model Types
export interface KPI {
  kpiPoint: string;
  kpiValue: string;
}

export interface Hero {
  _id: string;
  HeroTitle: string;
  HeroSubtitle: string;
  HeroBgImage: string;
  KPI: KPI[];
}

// Inbox Model Types
export interface InboxMessage extends TimestampFields {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
}

// Project Model Types
export interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  repositoryLink: string;
  liveLink: string;
  isFeatured: boolean;
}

// Services Model Types
export interface Service {
  _id: string;
  title: string;
  slug: string;
  Price: string;
  Description: string;
  image: string;
  timeline: string;
  technologies: string[];
  Features: string[];
}

// YouTube Model Types
export type VideoType = 'short' | 'long';

export interface Youtube extends TimestampFields {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  videoUrl: string;
  description: string;
  type: VideoType;
  channelName: string;
  isFeatured: boolean;
  isPublished: boolean;
  tags: string[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Common API Response Types
export type AboutResponse = ApiResponse<About>; // Single document
export type AdminResponse = ApiResponse<Admin>;
export type BlogResponse = ApiResponse<Blog>;
export type BlogsResponse = ApiResponse<Blog[]>;
export type ContactInfoResponse = ApiResponse<ContactInfo>; // Single document  
export type HeroResponse = ApiResponse<Hero>; // Single document
export type InboxMessageResponse = ApiResponse<InboxMessage>;
export type InboxMessagesResponse = ApiResponse<InboxMessage[]>;
export type ProjectResponse = ApiResponse<Project>;
export type ProjectsResponse = ApiResponse<Project[]>;
export type ServiceResponse = ApiResponse<Service>;
export type ServicesResponse = ApiResponse<Service[]>;
export type YoutubeResponse = ApiResponse<Youtube>;
export type YoutubeVideosResponse = ApiResponse<Youtube[]>;

// Form Types for Creating/Updating
export type CreateAboutData = Omit<About, '_id'>;
export type UpdateAboutData = Partial<CreateAboutData>;

export type CreateBlogData = Omit<Blog, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdateBlogData = Partial<CreateBlogData>;

export type CreateContactInfoData = Omit<ContactInfo, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdateContactInfoData = Partial<CreateContactInfoData>;

export type CreateHeroData = Omit<Hero, '_id'>;
export type UpdateHeroData = Partial<CreateHeroData>;

export type CreateInboxMessageData = Omit<InboxMessage, '_id' | 'createdAt' | 'updatedAt' | 'isRead'>;

export type CreateProjectData = Omit<Project, '_id'>;
export type UpdateProjectData = Partial<CreateProjectData>;

export type CreateServiceData = Omit<Service, '_id'>;
export type UpdateServiceData = Partial<CreateServiceData>;

export type CreateYoutubeData = Omit<Youtube, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdateYoutubeData = Partial<CreateYoutubeData>;

// Admin Login Types
export interface AdminLoginData {
  adminUserName: string;
  adminPassword: string;
}

export interface AdminLoginResponse extends ApiResponse<Admin> {
  token?: string;
}

// Query Parameters Types
export interface BlogQueryParams {
  isPublished?: boolean;
  isFeatured?: boolean;
  isMain?: boolean;
  tags?: string[];
  author?: string;
  page?: number;
  limit?: number;
}

export interface ProjectQueryParams {
  category?: string;
  isFeatured?: boolean;
  technologies?: string[];
  page?: number;
  limit?: number;
}

export interface YoutubeQueryParams {
  type?: VideoType;
  isFeatured?: boolean;
  isPublished?: boolean;
  tags?: string[];
  channelName?: string;
  page?: number;
  limit?: number;
}