import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { RoutingModule } from "./routing.module";
import { UiModule } from "./ui/ui.module";
import { ChaisesComponent } from "./chaises/chaises/chaises.component";
import { ChaiseFormComponent } from "./chaises/chaise-form/chaise-form.component";
import { ChiensComponent } from "./chiens/chiens/chiens.component";
import { ChienFormComponent } from "./chiens/chien-form/chien-form.component";
import { StudentsComponent } from "./students/students/students.component";
import { StudentFormComponent } from "./students/student-form/student-form.component";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardDetailsComponent } from './dashboard/dashboard-details/dashboard-details.component';
import { DashboardDetailsEditComponent } from './dashboard/dashboard-details-edit/dashboard-details-edit.component';
import { SubscribersComponent } from './subscribers/subscribers/subscribers.component';
import { SubscriberFormComponent } from './subscribers/subscriber-form/subscriber-form.component';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, "fr");

@NgModule({
  declarations: [
    AppComponent,
    ChaisesComponent,
    ChaiseFormComponent,
    ChiensComponent,
    ChienFormComponent,
    StudentsComponent,
    StudentFormComponent,
    DashboardComponent,
    DashboardDetailsComponent,
    DashboardDetailsEditComponent,
    SubscribersComponent,
    SubscriberFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    UiModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
