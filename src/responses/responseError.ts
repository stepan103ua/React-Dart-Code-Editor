export interface CustomErrorResponse {
  status: number;
  data: Error;
}

interface Error {
  error: string;
}
