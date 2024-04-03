export type TEventFilter = "FLAGSHIP" | "WEBINAR" | "EXTERNAL" | "PODCAST" | "TPG-EXCLUSIVE";

export interface IEventCardData {
  id: string;
  title: string;
  event_type: string;
  start_date: string;
  end_date: string;
  date_created: string;
  date_updated: string;
  description: string;
  image_url: string;
  facebook_url: string;
}

export interface IEventCardInfo {
  id: string;
  title: string;
  event_type: TEventFilter[];
  start_date: string;
  end_date: string;
  date_created: string;
  date_updated: string;
  description: string;
  image_url: string;
  facebook_url: string;
}

export interface IEventCatalogResponse {
  message: string;
  events: IEventCardData[];
}

export interface IEventCatalogProcessedResponse {
  message: string;
  events: IEventCardInfo[];
}
