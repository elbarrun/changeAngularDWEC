import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../peticion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  imgURL = 'http://localhost:8000/storage/';  // Define imgURL aquí
  peticiones: any = [];

  constructor(private peticionService: PeticionService) { }

  ngOnInit(): void {
    this.getAllPeticiones();
  }

  getAllPeticiones() {
    this.peticionService.getAll().subscribe(
      (res) => {
        this.peticiones = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deletePeticion(id: number) {
    this.peticionService.delete(id).subscribe(
      (res) => {
        console.log('Petición eliminada exitosamente');
        this.getAllPeticiones();  // Refresca la lista de peticiones después de eliminar una
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
