export interface IFAQDataEntry {
  description: string;
  id: string;
  title: string;
}

export interface IFAQSComponent {
  faqs: IFAQDataEntry[];
}

export interface IFAQResponse {
  message: string;
  faqs: IFAQDataEntry[];
}
