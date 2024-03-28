export interface IAlumniData {
  alumni: string[];
  user_id: string;
  alumni_year: string;
}

export interface IAlumniInfoResponse {
  message: string;
  alumni: IAlumniData[];
}
