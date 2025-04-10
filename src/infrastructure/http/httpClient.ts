import { axiosClient } from "./axiosClient";
//WRAPER OF AXIOS
export interface HttpResponse<T> {
  data: T;
  status: number;
}
export interface HttpClient {
  get<T>(url: string): Promise<HttpResponse<T>>;
  post<T, B = any>(url: string, body: B): Promise<HttpResponse<T>>;
  put<T, B = any>(url: string, body: B): Promise<HttpResponse<T>>;
  delete<T>(url: string): Promise<HttpResponse<T>>;
}
export const httpClient: HttpClient = {
  
  async get<T>(url: string) {
    const res = await axiosClient.get<T>(url);
    return { data: res.data, status: res.status };
  },

  async post<T>(url: string, body: any) {
    const res = await axiosClient.post<T>(url, body);
    return { data: res.data, status: res.status };
  },

  async put<T>(url: string, body: any) {
    const res = await axiosClient.put<T>(url, body);
    return { data: res.data, status: res.status };
  },

  async delete<T>(url: string) {
    const res = await axiosClient.delete<T>(url);
    return { data: res.data, status: res.status };
  },
};