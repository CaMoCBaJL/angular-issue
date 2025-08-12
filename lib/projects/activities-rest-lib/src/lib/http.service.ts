import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
    constructor(private readonly http: HttpClient){

    }

    callGoogle(): Observable<object> {
        return this.http.get('google.com');
    }
}