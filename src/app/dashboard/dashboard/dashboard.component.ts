import { Component, OnInit } from "@angular/core";

import { Student } from "src/app/students/student";
import { StudentsService } from "src/app/students/students.service";

@Component({
  selector: "app-dashboard",
  template: `
    <h2>Dashboard des étudiants</h2>
    <div class="row">
      <div class="col-4">
        <!-- Colonne servant à afficher la liste des étudiants -->
        <div class="list-group">
          <a
            *ngFor="let student of students"
            routerLink="/dashboard/{{ student?.id }}"
            class="list-group-item"
          >
            {{ student.firstName }} {{ student.lastName }}
          </a>
        </div>
      </div>
      <div class="col-8">
        <!-- Colonne servant à afficher les détails ou le formulaire de modification d'un étudiant -->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.studentsService
      .findAll()
      .subscribe(students => (this.students = students));
  }
}
