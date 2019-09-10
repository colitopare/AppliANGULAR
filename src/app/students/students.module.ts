import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { StudentsComponent } from "../students/students/students.component";
import { StudentFormComponent } from "../students/student-form/student-form.component";

@NgModule({
  declarations: [StudentsComponent, StudentFormComponent],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule]
})
export class StudentsModule {}
