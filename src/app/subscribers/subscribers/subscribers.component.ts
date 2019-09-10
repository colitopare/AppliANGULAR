import { Component, OnInit } from "@angular/core";
import { Subscriber } from "../subscriber";
import { SubscribersService } from "../subscribers.service";

@Component({
  selector: "app-subscribers",
  template: `
    <h1>Nos subscribers</h1>
  `,
  styles: []
})
export class SubscribersComponent implements OnInit {
  subscribers: Subscriber[] = [];

  constructor(private service: SubscribersService) {}

  ngOnInit() {}
}
