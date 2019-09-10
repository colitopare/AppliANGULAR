import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Chaise } from "../chaise";
import { ChaisesService } from "../chaises.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-chaise-form",
  template: `
    <h2>Création d'une chaise</h2>

    <form #form="ngForm" (ngSubmit)="handleSubmit(form)">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Nom de la chaise"
          [ngModel]="chaise?.name"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name="price"
          placeholder="Prix de la chaise (en €)"
          [ngModel]="chaise?.price"
        />
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  `,
  styles: []
})
export class ChaiseFormComponent implements OnInit {
  chaise: Chaise;

  constructor(
    private service: ChaisesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id != "new") {
      // this.chaise = this.service.getChaise(+id);
      this.service
        .getChaise(+id)
        .subscribe((chaise: Chaise) => (this.chaise = chaise));
    }
  }

  handleSubmit(form: NgForm) {
    if (form.invalid) return;

    if (this.chaise) {
      this.service.updateChaise({ ...this.chaise, ...form.value }).subscribe(
        resultat => this.router.navigateByUrl("/chaises"),
        error => {
          console.log(error);
        }
      );
    } else {
      this.service.createChaise(form.value).subscribe(
        () => this.router.navigateByUrl("/chaises"),
        () => {
          console.log("ce n'est pas bon");
        }
      );
    }

    this.router.navigateByUrl("/chaises");
  }
}
