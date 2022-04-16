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
  keword: string;
}

export interface Applicant {
  name: string;
  thumbnail: string;
  platform: string;
  gender: string;
  accountName: string;
  height: number;
  weight: number;
  keyword: string;
  rate: number;
}

export interface ApplicantPicsProps {
  thumbnail: string;
}
