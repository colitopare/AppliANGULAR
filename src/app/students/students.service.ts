import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Student } from "./student";

const API_URL = "http://5d70b642d3448a001411acc3.mockapi.io/students";

@Injectable({
  providedIn: "root"
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  public findAll() {
    return this.http.get<Student[]>(API_URL);
  }

  public find(id: number) {
    return this.http.get<Student>(API_URL + `/${id}`);
  }

  public update(student: Student) {
    return this.http.put<Student>(API_URL + `/${student.id}`, student);
  }

  public create(student: Student) {
    return this.http.post<Student>(API_URL, student);
  }

  public delete(id: number) {
    return this.http.delete<Student>(API_URL + `/${id}`);
  }
}
