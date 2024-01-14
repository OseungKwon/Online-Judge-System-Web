import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export interface AxiosResponseInterface<T, U> {
  responseData: T;
  requestData: U;
}

axios.defaults.headers.common['Content-Type'] = 'application/json';

export interface CustomInstance extends AxiosInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
}

export const customAxios: CustomInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
customAxios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = sessionStorage.getItem('accessToken');
  if (accessToken) {
    if (config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  return config;
});

customAxios.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
});

// use post, delete, put method
function axiosHandler<TResponseData, TRequestData extends object | undefined>(
  func: (url: string, data?: unknown, config?: AxiosRequestConfig) => Promise<TResponseData>,
  url: string,
  requestData: TRequestData,
  config?: AxiosRequestConfig,
): Promise<AxiosResponseInterface<TResponseData, TRequestData>>;

// use get method
function axiosHandler<TResponseData, TRequestData extends object | undefined>(
  func: (url: string, config?: AxiosRequestConfig) => Promise<TResponseData>,
  url: string,
  requestData: TRequestData,
  config?: AxiosRequestConfig,
): Promise<AxiosResponseInterface<TResponseData, TRequestData>>;

async function axiosHandler<TResponseData, TRequestData extends object | undefined>(
  func: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<TResponseData>,
  url: string,
  requestData: TRequestData,
  config?: AxiosRequestConfig,
): Promise<AxiosResponseInterface<TResponseData, TRequestData>> {
  const fetchData = {
    config: config,
    data: undefined,
  };
  const calledFunction = (() => {
    if (func === customAxios.get || func === customAxios.delete) {
      return func(url, fetchData.config);
    } else {
      return func(url, fetchData.data, fetchData.config);
    }
  })();

  // const calledFunction = await func(url, requestData, config);
  return calledFunction
    .then((response) => {
      return {
        responseData: response,
        requestData: requestData,
      };
    })
    .catch((e) => {
      throw e;
    });
}

export { axiosHandler };
