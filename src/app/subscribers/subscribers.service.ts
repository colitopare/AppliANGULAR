import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subscriber } from "./subscriber";

const API_URL = "http://5d70b642d3448a001411acc3.mockapi.io/subscribers";

@Injectable({
  providedIn: "root"
})
export class SubscribersService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Subscriber[]>(API_URL);
  }
}
