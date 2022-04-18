export interface CampaignCardInfo {
  id: number;
  thumbnail_url: string;
  title: string;
  status: string;
  evaluation_start_date: string;
}

export interface QueryInfo {
  query_for_status: string;
  query_for_sort: string;
}

export interface ApplicantInfo {
  name: string;
  gender: string;
  height: string;
  weight: string;
  keyword: string;
}

export interface ApplicantProps {
  id: number;
  name: string;
  thumbnail: string;
  platform: string[];
  gender: string;
  accountName: string;
  height: number;
  weight: number;
  keywords: string[];
  rate: { rate_avg: number };
  campaignApplicantId: number;
  campaignParam: string | undefined;
  BASE_URL: string;
  setAvgRate: any;
}

export interface ApplicantPicsProps {
  thumbnail: string;
}

export interface StarRatingProps {
  rateKind: string;
}
export interface AllAcceptantsProps {
  name: string;
  thumbnail: string;
  gender: string;
  platforms: string[];
  accountName: string;
  height: number;
  weight: number;
  keywords: string[];
  acceptedCampaigns: string[];
}

export interface CampaignCardProps {
  campaignCard: CampaignCardInfo;
}

export interface AcceptedApplicantsCardprop {
  thumbnail_url: string;
  name: string;
  gender: string;
  birthdate: string;
  contact: string;
  address: string;
}
