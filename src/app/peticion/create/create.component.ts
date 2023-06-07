import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../peticion.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  imageSrc: string='';
  form!: FormGroup;
  selectedImage: any;
  categorias:any = [];
  files!: File;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public peticionService: PeticionService,
    private router: Router,
    private http: HttpClient,
    public fb: FormBuilder,
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', Validators.required),
      destinatario: new FormControl('', Validators.required),
      categoria_id: new FormControl('', Validators.required),
      file: new FormControl(null, Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */

  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.form.patchValue({
      file: file
    });
  }
  submit(){
    const formData = new FormData();
    formData.append('titulo', this.form.value.titulo);
    formData.append('descripcion', this.form.value.descripcion);
    formData.append('destinatario', this.form.value.destinatario);
    formData.append('categoria_id', this.form.value.categoria_id);
    formData.append('file', this.selectedImage);

    this.peticionService.create(formData).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/peticiones']);
      },
      error => {
        console.log(error);
      }
    );
    }}
