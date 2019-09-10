import { Injectable } from "@angular/core";

import { Chaise } from "./chaise";
import { Observable, of, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChaisesService {
  chaises: Chaise[] = [
    { id: 1, name: "chaise en bois", price: 10 },
    { id: 2, name: "chaise en fer", price: 20 },
    { id: 3, name: "chaise en plastique", price: 5 }
  ];
  constructor(private http: HttpClient) {}

  getChaises(): Observable<Chaise[]> {
    return this.http.get<Chaise[]>(
      "http://5a5a9e00bc6e340012a03796.mockapi.io/chaises"
    );
  }

  getChaise(id: number): Observable<Chaise> {
    return this.http.get<Chaise>(
      "http://5a5a9e00bc6e340012a03796.mockapi.io/chaises/" + id
    );
  }

  createChaise(chaise: Chaise): Observable<boolean> {
    chaise.id = new Date().getDate();
    this.chaises.push(chaise);
    return of(true);
  }

  updateChaise(chaise: Chaise): Observable<Chaise> {
    return this.http.put<Chaise>(
      "http://5a5a9e00bc6e340012a03796.mockapi.io/chaises/" + chaise.id,
      chaise
    );
  }

  deleteChaise(id: number): Observable<Chaise> {
    return this.http.delete<Chaise>(
      "http://5a5a9e00bc6e340012a03796.mockapi.io/chaises/" + id
    );
  }
}
