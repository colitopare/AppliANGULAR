import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/students/student";
import { StudentsService } from "src/app/students/students.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard-details",
  template: `
    <h2>{{ student?.firstName }} {{ student?.lasttName }}</h2>
    <!-- [...] ajouter tous les détails d'un étudiant -->
    <a [routerLink]="['edit']" class="btn btn-primary"> Modifier </a>
  `,
  styles: []
})
export class DashboardDetailsComponent implements OnInit {
  student: Student;
  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    // On veut réagir aux changements des paramètres dans l'url
    // On reçoit les paramètres lorsqu'ils changent
    this.route.paramMap.subscribe(params => {
      // params représente la liste des paramètres contenues dans 'route'
      // On demande le paramètre id sous la forme d'un nombre
      const id = +params.get("id");
      // On a récupéré l'id et on souscrit à l'observable du StudentsService, comme avant
      this.studentsService
        .find(id)
        .subscribe(student => (this.student = student)); // Note : adapter selon le nom de la méthode 'trouverUnEtudiant' du service
    });
  }
}
