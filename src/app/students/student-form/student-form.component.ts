import { Component, OnInit } from "@angular/core";
import { Student } from "../student";
import { StudentsService } from "../students.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-student-form",
  template: `
    <div class="row">
      <div class="col-6">
        <h2>{{ student ? "Modifier un étudiant" : "Créer un étudiant" }}</h2>

        <form #form="ngForm" (ngSubmit)="handleSubmit(form)">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="firstName"
              placeholder="Prénom"
              [ngModel]="student?.firstName"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="lastName"
              placeholder="Nom de famille"
              [ngModel]="student?.lastName"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              name="age"
              placeholder="Age (en années)"
              [ngModel]="student?.age"
            />
          </div>
          <div class="form-group">
            <input
              type="url"
              class="form-control"
              name="avatar"
              placeholder="URL de l'avatar"
              [ngModel]="student?.avatar"
            />
          </div>
          <div class="form-group">
            <select
              name="funded"
              class="form-control"
              [ngModel]="student?.funded"
            >
              <option value="">-- Financement --</option>
              <option [ngValue]="true">Oui</option>
              <option [ngValue]="false">Non</option>
            </select>
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-success">Enregistrer !</button>
          </div>
        </form>
      </div>
      <div class="col-6">
        <h2>Prévisiualisation</h2>

        <div class="card  mb-3" *ngIf="form.value as s">
          <div class="card-body">
            <h3 class="card-title">
              {{ s.firstName || "John" }} {{ s.lastName || "Doe" }}
            </h3>
            <hr />
            <div class="d-flex align-items-center">
              <img
                [src]="s.avatar || 'http://placehold.it/200x200'"
                alt=""
                style="max-width: 64px; max-height: 64px"
                class="img-fluid mr-5 rounded-circle"
              />
              <div>
                <p class="card-text m-0">
                  <strong>Âge : </strong> {{ s.age || "X" }} ans
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
            <a href="#" class="btn btn-link">
              Editer
            </a>
            <button class="btn btn-link">
              Supprimer
            </button>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class StudentFormComponent implements OnInit {
  student: Student;
  errorMessage: string;

  constructor(
    private service: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    if (id !== "new") {
      this.service.find(+id).subscribe(student => (this.student = student));
    }
  }

  handleSubmit(form: NgForm) {
    if (form.invalid) return;

    if (this.student) {
      this.service.update({ ...this.student, ...form.value }).subscribe(
        () => {
          this.router.navigateByUrl("/students");
        },
        () => {
          this.errorMessage =
            "Une erreur est survenue, veuillez réessayer plus tard ...";
        }
      );

      return;
    }

    this.service.create(form.value).subscribe(
      () => {
        this.router.navigateByUrl("/students");
      },
      () => {
        this.errorMessage =
          "Une erreur est survenue, veuillez réessayer plus tard ...";
      }
    );
  }
}
