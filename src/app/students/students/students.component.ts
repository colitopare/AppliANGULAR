import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../students.service";
import { Student } from "../student";

@Component({
  selector: "app-students",
  template: `
    <h2>Nos superbes étudiants</h2>
    <div class="alert alert-light">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere
      itaque officiis reiciendis dolor! Consequatur eos aut maxime impedit
      laudantium?
      <hr />
      <a
        routerLink="/students/new"
        class="btn btn-dark text-white text-decoration-none"
        >Créer un étudiant</a
      >
    </div>

    <div class="row">
      <div class="col-4" *ngFor="let s of students">
        <div class="card  mb-3">
          <div class="card-body">
            <h3 class="card-title">{{ s.firstName }} {{ s.lastName }}</h3>
            <hr />
            <div class="d-flex align-items-center">
              <img
                [src]="s.avatar"
                alt=""
                style="max-width: 64px; max-height: 64px"
                class="img-fluid mr-5 rounded-circle"
              />
              <div>
                <p class="card-text m-0">
                  <strong>Âge : </strong> {{ s.age }} ans
                </p>
                <p class="card-text m-0">
                  <strong>Financement : </strong>
                  <span
                    class="badge"
                    [ngClass]="{
                      'badge-success': s.funded,
                      'badge-dark': !s.funded
                    }"
                  >
                    {{ s.funded ? "Oui" : "Non" }}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p class="card-text">
            <a routerLink="/students/{{ s.id }}" class="btn btn-link">
              Editer
            </a>
            <button class="btn btn-link" (click)="handleDelete(s)">
              Supprimer
            </button>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private service: StudentsService) {}

  ngOnInit() {
    this.service.findAll().subscribe(students => (this.students = students));
  }

  handleDelete(student: Student) {
    this.service.delete(student.id).subscribe(
      () => {
        const index = this.students.findIndex(s => s.id === student.id);
        this.students.splice(index, 1);
      },
      () => {
        alert(
          `Une erreur s'est produite lors de la suppression de ${student.firstName} ${student.lastName}. \n\nVeuillez réessayer plus tard`
        );
      }
    );
  }
}
