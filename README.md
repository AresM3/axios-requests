# Axios Requests

This library offers an easy way to bind axios with rxjs.

### Usage ###

There are 4 static methods **_get, post, put and delete_** that returnes an Observable. Every method
forwards `response.data` of the response object. If you need to deal with Blob there are the two methods `GetBlob`
and `PostBlob` that works exactly as the other methods.

### Examples ###

```typescript
import {AxiosRequest} from "./src/index";
import {Observable} from "rxjs";

let url = "http://test.test";
let get: Observable<string> = AxiosRequest.get<string>(url);
let post: Observable<{ id: number, string: string }> = AxiosRequest.post<string>(url, {string: "string"});
let put: Observable<{ id: number, string: string }> = AxiosRequest.put<string>(url, {id: 1, string: "modified_string"});
let del: Observable<{ id: number, string: string }> = AxiosRequest.delete<string>(url);
get.subscribe(a => console.log(a));
```
