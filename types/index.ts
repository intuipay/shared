import {
  OrganizationType,
  ProjectCategories,
  ProjectStatus,
  ProjectTypes,
} from "../constants";

export type ApiResponse<T> = {
  code: number;
  data: T;
  meta?: {
    total: number;
  };
  message?: string;
}

export type OrganizationInfo = {
  ein: string;
  id: number;
  org_name: string;
  org_slug: string;
  org_logo: string;
  org_website?: string;
  org_description?: string;
  org_type: OrganizationType;
  permission: string;
  org_contact: string;
  email: string;
  org_location: string;
  timezone: string;
  social_links: string; // stringified JSON object
  balance: string;
}

export type ProjectInfo = {
  id: number;
  project_slug: string;
  project_subtitle: string;
  accepts: string;
  amount: number;
  banner: string;
  banners: string;
  campaign: string;
  category: ProjectCategories;
  email: string;
  end_at: string;
  github: string;
  goal_amount: number;
  location: string;
  org_id: number;
  org_contact: string;
  org_description: string;
  org_location: string;
  org_logo: string;
  org_name: string;
  org_slug: string;
  org_type: string;
  org_website: string;
  project_name: string;
  social_links: Record<string, string>;
  status: ProjectStatus;
  tags: string[];
  type: ProjectTypes;
  website: string;
  backers: number;
  video: string;
  brand_color?: string;
  project_cta?: string;
  thanks_note?: string;
  is_auto_end: string;

  created_at: string;
  deleted_at?: string;
  updated_at: string;
  published_at: string;

  isDeleting?: boolean;
}

export type TiDBDataServiceResponse<T> = {
  data: {
    columns: string[];
    rows: T[];
  }
}

export interface Profile {
  id: string;
  location: string;
  timezone: string;
  bio: string;
  social_links: string | Record<string, string>;
  number: string;
  first_name: string;
  last_name: string;
  display_image: string;
}

export interface SessionUser {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface KeyPersonnel {
  display_email: string;
  first_name: string;
  issue_id: string;
  last_name: string;
  title: string;
  email: string;
}

export interface Donation {
  id: string;
  dollar: string;
  amount: string;
  tx_hash: string;
  currency: string;
  method: string;
  created_at: string;
  status: string;
  country: string;
  first_name: string;
  last_name: string;
  company_name: string;
}
