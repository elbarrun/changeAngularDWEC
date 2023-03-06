import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PeticionRoutingModule } from './peticion-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    PeticionRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PeticionModule { }
