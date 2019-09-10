import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-car-form",
  template: `
    <h2>{{ car ? "Modification de la voiture" : "Création de la voiture" }}</h2>
    <form [formGroup]="nameForm" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input
          formControlName="marque"
          type="text"
          class="form-control"
          placeholder="Marque de la voiture"
        />
        <p *ngIf="hasError('marque', 'required')">
          La marque de la voiture est obligatoire
        </p>
      </div>
      <div class="form-group">
        <input
          formControlName="model"
          type="text"
          class="form-control"
          placeholder="Modèle de la voiture"
        />
        <p *ngIf="hasError('model', 'required')">
          Le modèle de la voiture est obligatoire
        </p>
      </div>
      <div class="form-group">
        <input
          formControlName="age"
          type="text"
          class="form-control"
          placeholder="Age de la voiture"
        />
        <p *ngIf="hasError('age', 'required')">
          L'age de la voiture est obligatoire
        </p>
      </div>
      <div class="form-group">
        <input
          formControlName="enVente"
          type="checkbox"
          class="form-control"
          id="enVente"
        /><label for="enVente">En vente</label>
      </div>
      <hr />

      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  `,
  styles: []
})
export class CarFormComponent implements OnInit {
  nameForm: FormGroup;
  // car;
  car = {
    marque: "Peugeot",
    model: "1008",
    age: 5,
    enVente: true
  };

  constructor() {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.nameForm = new FormGroup({
      marque: new FormControl(this.car && this.car.marque, [
        Validators.required
      ]),
      model: new FormControl(this.car && this.car.model, [Validators.required]),
      age: new FormControl(this.car && this.car.age, [Validators.required]),
      enVente: new FormControl(this.car && this.car.enVente)
    });
  }

  handleSubmit() {
    console.log(this.nameForm.value);
  }

  hasError(fieldName: string, errorName: string) {
    return (
      this.nameForm.get(fieldName).hasError(errorName) &&
      this.nameForm.get(fieldName).dirty
    );
  }
}
