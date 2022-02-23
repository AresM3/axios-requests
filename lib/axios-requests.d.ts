import { AxiosRequestConfig } from 'axios';
import { Observable } from 'rxjs';
export declare class AxiosRequest {
    static get<T>(url: string, config?: AxiosRequestConfig): Observable<T>;
    static post<T>(url: string, data: any, config?: AxiosRequestConfig): Observable<T>;
    static put<T>(url: string, data: any, config?: AxiosRequestConfig): Observable<T>;
    static delete<T>(url: string, config?: AxiosRequestConfig): Observable<T>;
    static getBlob(url: string, config?: AxiosRequestConfig): Observable<Blob>;
    static postBlob(url: string, data: any, config?: AxiosRequestConfig): Observable<Blob>;
}
