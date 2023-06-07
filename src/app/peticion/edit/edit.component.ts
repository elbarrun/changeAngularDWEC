import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Peticion } from '../peticion';
import { PeticionService } from '../peticion.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {


  id!: number;
  peticion!: Peticion;
  form!: FormGroup;

  constructor(
    public PeticionService: PeticionService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['peticionId'];
    this.PeticionService.find(this.id).subscribe((data: Peticion) => {
      this.peticion = data;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.form = new FormGroup({
      titulo: new FormControl(this.peticion.titulo, [Validators.required]),
      descripcion: new FormControl(this.peticion.descripcion, [Validators.required]),
      destinatario: new FormControl(this.peticion.destinatario, [Validators.required]),

      categoria_id: new FormControl(this.peticion.categoria_id, [Validators.required]),
      file: new FormControl(this.peticion.file, [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.PeticionService.update(this.id, this.form.value).subscribe(res => {
      this.router.navigateByUrl('peticiones/listado');
    })

  }

}
