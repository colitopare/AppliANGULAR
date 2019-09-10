import { Component, OnInit } from "@angular/core";

import { Chaise } from "../chaise";
import { ChaisesService } from "../chaises.service";

@Component({
  selector: "app-chaises",
  template: `
    <h2>Liste des chaises</h2>

    <a routerLink="/chaises/new">Créer une chaise</a>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Chaise</th>
          <th>Prix</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let chaise of chaises">
          <td>{{ chaise.id }}</td>
          <td>
            <a routerLink="/chaises/{{ chaise.id }}">
              {{ chaise.name }}
            </a>
          </td>
          <td>{{ chaise.price | currency: "EUR" }}</td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              (click)="handleDelete(chaise)"
            >
              X
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class ChaisesComponent implements OnInit {
  chaises: Chaise[] = [];

  constructor(private service: ChaisesService) {}

  ngOnInit() {
    // this.chaises = this.service.getChaises();
    // const observable = this.service.getChaises();
    // observable.subscribe(function(chaises: Chaise[]) {
    //   console.log(chaises);
    // });
    // ===
    this.service
      .getChaises()
      .subscribe((chaises: Chaise[]) => (this.chaises = chaises));
  }

  handleDelete(chaise: Chaise) {
    this.service.deleteChaise(chaise.id);
    this.chaises = this.service.chaises;
  }
}
