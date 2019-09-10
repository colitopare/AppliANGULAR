import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/students/student";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { StudentsService } from "src/app/students/students.service";

@Component({
  selector: "app-dashboard-details-edit",
  template: `
    <!--
    <form [formGroup]="form" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input class="form-control" type="text" formControlName="firstName" />
      </div>
      <!-- [...] Ajouter tous les champs nécessaires 
      <button type="submit" class="btn btn-primary">Modifier</button>
    </form>
    -->
  `,
  styles: []
})
export class DashboardDetailsEditComponent implements OnInit {
  student: Student;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.student && this.student.firstName)
      // etc, pour tous les champs dont on a besoin
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get("id");
      this.studentsService.find(id).subscribe(student => {
        this.student = student;
        this.initializeForm(); // pour gérer l'initialisation quand le student est livré
      });
    });
    this.initializeForm(); // pour gérer l'initialisation avant que le studient soit livré, car il nous faut une initialisation quoi qu'il arrive
  }

  handleSubmit() {
    if (this.form.invalid) return;
    const student = { ...this.student, ...this.form.value };
    this.studentsService.update(student).subscribe(() => {
      this.router.navigateByUrl("/dashboard/" + student.id); // Une fois l'update effectué, on revient sur la page détails de l'étudiant
    });
  }
}
