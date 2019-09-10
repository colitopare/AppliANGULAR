import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { DogFormComponent } from './dog-form/dog-form.component';



@NgModule({
  declarations: [DogsComponent, DogFormComponent],
  imports: [
    CommonModule
  ]
})
export class DogsModule { }
