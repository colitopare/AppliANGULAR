import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ClientsService } from "../clients.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-client-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.scss"]
})
export class ClientFormComponent implements OnInit {
  client;

  constructor(
    private service: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== "new") {
      this.client = this.service.getClient(+id);
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // 1) appeler le formulaire
      if (this.client) {
        const updatedClient = { ...this.client, ...form.value };
        this.service.updateClient(updatedClient);
      } else {
        this.service.addClient(form.value);
      }

      // 2)
      this.router.navigateByUrl("/clients");
    }
  }
}
