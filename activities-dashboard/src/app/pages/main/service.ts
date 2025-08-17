import { HttpClient, provideHttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TestService {
    constructor(private http: HttpClient){

    }

    callGoogle(): void {
        this.http.get('google.com');
    }
}