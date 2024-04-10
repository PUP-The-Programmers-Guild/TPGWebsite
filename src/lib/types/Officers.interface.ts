export interface IOfficerInfo {
  name: string;
  position: string;
  image_url?: string;
}

export interface IOfficerOffice {
  office: string;
  officers: IOfficerInfo[];
  user_id: string;
}

export interface IOfficerResponse {
  message: string;
  officers: IOfficerOffice[];
}

export interface IOfficersComponentProps {
  executivesData: IOfficerOffice[];
  committeeHeadsData: IOfficerOffice[];
}
