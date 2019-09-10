import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "b-badge",
  template: `
    <span class="badge badge-{{ color }}">
      <ng-content></ng-content>
    </span>
  `,
  styles: []
})
export class BadgeComponent {
  @Input()
  color: string = "primary";
}
