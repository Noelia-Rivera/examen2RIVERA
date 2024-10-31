import { Component } from '@angular/core';
import { SidevarComponent } from "../sidevar/sidevar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FacultadService } from '../../services/facultad.service';
import { Facultad } from '../../models/facultad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facultad',
  standalone: true,
  imports: [SidevarComponent, NgFor,FormsModule,NgIf,ReactiveFormsModule],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})
export class FacultadComponent {
  facultades: Facultad[]=[];
  isUpdate:boolean = false;
  formFacultad:FormGroup = new FormGroup({});
  constructor(
    private facultadService:FacultadService
  ){}

  ngOnInit():void{
    this.listarFacultades();
    this.formFacultad = new FormGroup({
      id_facultad: new FormControl(''),
      nombre:new FormControl(''),
      estado:new FormControl(''),
    });
  }

  listarFacultades(): void {
    this.facultadService.getFacultades().subscribe(
      (data: Facultad[]) => {
        this.facultades = data;
      },
      (error) => {
        console.error('Error al obtener las facultades', error);
      }
    );
  }

  crearFacultad() {
    const nuevafacultad = {
      id_facultad: this.formFacultad.value.id_facultad,
      nombre: this.formFacultad.value.nombre,
      estado: this.formFacultad.value.estado,
    } as any;
    this.facultadService.crearFacultad(nuevafacultad).subscribe({
      next: (resp) => {
        if (resp) {
          Swal.fire({
            icon: 'success',
            title: 'Libro creado',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          this.listarFacultades();
          this.formFacultad.reset();
        }
      },
      error: (err) => {
        console.error('Error creando facultad', err);
      }
    });
  }

  resetFormFacultad(){
    this.formFacultad.reset();
  }

  selectFacultad(facultad: any) {
    this.isUpdate = true;
    this.formFacultad.controls['id_facultad'].setValue(facultad.id_facultad);
    this.formFacultad.controls['nombre'].setValue(facultad.nombre);
    this.formFacultad.controls['estado'].setValue(facultad.estado);
  }

  actualizarFacultad() {
    const facultad = {
      id_facultad: this.formFacultad.value.id_facultad,
      nombre: this.formFacultad.value.nombre,
      estado: this.formFacultad.value.estado,
    } as any;
    this.facultadService.actualizarFacultad(facultad).subscribe({
      next: (resp) => {
        if (resp) {
          Swal.fire({
            icon: 'success',
            title: 'Carrera actualizado',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          this.listarFacultades();
          this.formFacultad.reset();
        }
      },
      error: (err) => {
        console.error('Error AL ACTUALIZAR', err);
      }
    });
  }

  eliminarFacultad(id_facultad: any){
    Swal.fire({
      title: "¿Estás seguro de borrar la facultad?",
      text: "¡No serás capaz de reveritrlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#19e212",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borralo!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Borrado!",
          text: "El dato ha sido borrado",
          icon: "success"
        });
        this.facultadService.deleteFacultad(id_facultad).subscribe(resp=>{this.listarFacultades();});
      }
    });
  }


}
