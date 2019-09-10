import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import { BadgeComponent } from "./badge/badge.component";
import { ContainerComponent } from "./container/container.component";

@NgModule({
  declarations: [TableComponent, BadgeComponent, ContainerComponent],
  imports: [CommonModule],
  exports: [TableComponent, BadgeComponent, ContainerComponent]
})
export class UiModule {}
