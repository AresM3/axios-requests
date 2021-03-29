# Axios Requests
This library offers an easy way to bind axios with rxjs.

### Usage ###
There are 4 static methods **_get, post, put and delete_** that returnes an Observable.
Every method forwards *response.data.success* of the response object.

### Examples ###

```typescript
import {AxiosRequest} from "./axios-requests";

let ob = new AxiosRequest.get<string>("http://test.test");
ob.subscribe(a => console.log(a));
```
