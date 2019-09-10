import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClientsComponent } from "./clients/clients.component";
import { UiModule } from "../ui/ui.module";
import { ClientFormComponent } from "./client-form/client-form.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ClientsComponent, ClientFormComponent],
  imports: [CommonModule, UiModule, FormsModule, RouterModule],
  exports: [ClientsComponent, ClientFormComponent]
})
export class ClientsModule {}
