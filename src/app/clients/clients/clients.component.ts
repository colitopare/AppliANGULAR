import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../clients.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  clients = [];

  constructor(private service: ClientsService) {}

  ngOnInit() {
    this.clients = this.service.getClients();
  }
}
