export type TEventFilter = "FLAGSHIP" | "WEBINARS" | "EXTERNAL" | "PODCAST" | "TPG-EXCLUSIVE";

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
  events: IEventCardInfo[];
}
