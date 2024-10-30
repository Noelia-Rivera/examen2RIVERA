import { Component } from '@angular/core';
import { SidevarComponent } from "../sidevar/sidevar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FacultadService } from '../../services/facultad.service';
import { Facultad } from '../../models/facultad';

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
}
