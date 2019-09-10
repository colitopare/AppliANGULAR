import { Component } from "@angular/core";

@Component({
  selector: "b-table",
  template: `
    <table class="table">
      <thead>
        <ng-content select="tr.b-head"></ng-content>
      </thead>
      <tbody>
        <ng-content select="tr.b-body"></ng-content>
      </tbody>
    </table>
  `,
  styles: []
})
export class TableComponent {}
