import { Component, OnInit } from "@angular/core";

@Component({
  selector: "b-container",
  template: `
    <div class="container mt-5 mb-5">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class ContainerComponent {}
