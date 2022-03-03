import axios, {AxiosRequestConfig} from 'axios';
import {Observable} from 'rxjs';

export class AxiosRequest {
    public static get<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
        return new Observable<T>(observer => {
            axios.get(url, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }

    public static post<T>(url: string, data: any, config?: AxiosRequestConfig): Observable<T> {
        return new Observable<T>(observer => {
            axios.post(url, data, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }

    public static put<T>(url: string, data: any, config?: AxiosRequestConfig): Observable<T> {
        return new Observable<T>(observer => {
            axios.put(url, data, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }

    public static delete<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
        return new Observable<T>(observer => {
            axios.delete(url, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }

    public static getBlob(url: string, config?: AxiosRequestConfig): Observable<Blob>{
        if(!!config) config.responseType = "blob";
        else config = {responseType: "blob"};
        return new Observable<Blob>(observer => {
            axios.get(url, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }

    public static postBlob(url: string, data: any, config?: AxiosRequestConfig): Observable<Blob>{
        if(!!config) config.responseType = "blob";
        else config = {responseType: "blob"};
        return new Observable<Blob>(observer => {
            axios.post(url, data, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        })
    }
}
