import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PeticionRoutingModule } from './peticion-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PeticionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PeticionModule { }
