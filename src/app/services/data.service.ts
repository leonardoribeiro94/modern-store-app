import { Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

//Importado manualmente
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    private serviceUrl: string = "http://localhost:52057/";

    constructor(private http: Http) {

    }

    createUser(data: any) {
        return this.http
            .post(this.serviceUrl + "v1/customers", data).map((response: Response) => response.json)
    }

    authenticate(data: any) {
        var dt = "grant_type=password&username=" + data.username + "&password=" + data.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'v1/authenticate', dt, options).map((res: Response) => res.json());
    }

    getProducts = () => {
        return this.http.get(`${this.serviceUrl}v1/products`).map((response: Response) => response.json());
    }

    getCourses() {
        return this.http
            .get("https://abt-api.azurewebsites.net/api/courses")
            .map((response: Response) => response.json());
    }

    createOrder(data: any) {
        let token = localStorage.getItem("mws.token");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`); Headers
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.serviceUrl + "v1/orders", data, options).map((response: Response) => response.json)
    }
}
