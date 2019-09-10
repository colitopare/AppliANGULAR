import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { ClientsComponent } from "./clients/clients/clients.component";
import { ClientFormComponent } from "./clients/client-form/client-form.component";
import { ClientsModule } from "./clients/clients.module";

import { ChaisesComponent } from "./chaises/chaises/chaises.component";
import { ChaiseFormComponent } from "./chaises/chaise-form/chaise-form.component";

import { StudentsComponent } from "./students/students/students.component";
import { StudentFormComponent } from "./students/student-form/student-form.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { DashboardDetailsComponent } from "./dashboard/dashboard-details/dashboard-details.component";
import { DashboardDetailsEditComponent } from "./dashboard/dashboard-details-edit/dashboard-details-edit.component";

import { ArbreFormComponent } from "./arbre-form/arbre-form.component";

import { CarFormComponent } from "./car-form/car-form.component";
import { SubscribersComponent } from "./subscribers/subscribers/subscribers.component";
import { SubscriberFormComponent } from "./subscribers/subscriber-form/subscriber-form.component";

const routes: Routes = [
  { path: "clients", component: ClientsComponent },
  { path: "clients/:id", component: ClientFormComponent },
  { path: "chaises", component: ChaisesComponent },
  { path: "chaises/:id", component: ChaiseFormComponent },
  { path: "students", component: StudentsComponent },
  { path: "students/:id", component: StudentFormComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: ":id", component: DashboardDetailsComponent },
      { path: ":id/edit", component: DashboardDetailsEditComponent }
    ]
  },
  { path: "subscribers", component: SubscribersComponent },
  { path: "subscribers/:id", component: SubscriberFormComponent },
  { path: "arbre", component: ArbreFormComponent },
  { path: "car", component: CarFormComponent },
  { path: "", redirectTo: "/clients", pathMatch: "full" }
];

@NgModule({
  declarations: [ArbreFormComponent, CarFormComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ClientsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
