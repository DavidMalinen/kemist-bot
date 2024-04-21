/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Error {
  status?: number;
  statusCode?: number;
  message: string;
  errors?: object[];
  details?: string;
  isAxiosError?: boolean;
  toJSON?: any;
  stack?: string;
  response?: {
    [key: string]: any;
  }
}
