export interface CampaignCardInfo {
  id: number;
  thumbnail: string;
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
  keword: string;
}

export interface ApplicantProps {
  id: number;
  name: string;
  thumbnail: string;
  platform: string;
  gender: string;
  accountName: string;
  height: number;
  weight: number;
  keyword: string;
  rate: number;
  campaignApplicantId: number;
  campaignParam: string | undefined;
  BASE_URL: string;
}

export interface ApplicantPicsProps {
  thumbnail: string;
}
