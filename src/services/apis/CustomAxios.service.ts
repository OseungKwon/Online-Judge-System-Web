import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface AxiosResponseInterface<T, U> {
  responseData: T;
  requestData: U;
}

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const customAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export async function axiosHandler<TResponseData, TRequestData extends object | undefined>(
  func: (url: string, data?: unknown, config?: AxiosRequestConfig) => Promise<TResponseData>,
  url: string,
  requestData: TRequestData,
  config?: AxiosRequestConfig,
): Promise<AxiosResponseInterface<TResponseData, TRequestData>> {
  const responseData = await func(url, requestData, config);
  return {
    responseData: responseData,
    requestData: requestData,
  };
}
