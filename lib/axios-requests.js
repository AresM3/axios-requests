import axios from 'axios';
import { Observable } from 'rxjs';
export class AxiosRequest {
    static get(url, config) {
        return new Observable(observer => {
            axios.get(url, config)
                .then(response => observer.next(response.data.success))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }
    static post(url, data, config) {
        return new Observable(observer => {
            axios.post(url, data, config)
                .then(response => observer.next(response.data.success))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }
    static put(url, data, config) {
        return new Observable(observer => {
            axios.put(url, data, config)
                .then(response => observer.next(response.data.success))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }
    static delete(url, config) {
        return new Observable(observer => {
            axios.delete(url, config)
                .then(response => observer.next(response.data.success))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }
    static getBlob(url, config) {
        if (!!config)
            config.responseType = "blob";
        else
            config = { responseType: "blob" };
        return new Observable(observer => {
            axios.get(url, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }
    static postBlob(url, data, config) {
        if (!!config)
            config.responseType = "blob";
        else
            config = { responseType: "blob" };
        return new Observable(observer => {
            axios.post(url, data, config)
                .then(response => observer.next(response.data))
                .catch(error => observer.error(error))
                .finally(() => observer.complete());
        });
    }
}
//# sourceMappingURL=axios-requests.js.map