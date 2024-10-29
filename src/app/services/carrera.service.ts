import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private apiUrl = "http://localhost:8080/api/carreras"
  constructor(private http:HttpClient) { }

  getCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(`${this.apiUrl}`);
  }

  crearCarrera(carrera: Carrera):Observable<Carrera>{
    return this.http.post<Carrera>(this.apiUrl, carrera);
  }

  getCarreraById(id_carrera: number):Observable<Carrera>{
    return this.http.get<Carrera>(`${this.apiUrl}/${id_carrera}`);
  }

  actualizarCarrera(carrera: Carrera):Observable<Carrera>{
    return this.http.put<Carrera>(this.apiUrl, carrera);
  }

  deleteCarrera(id_carrera:number){
    return this.http.delete(`${this.apiUrl}/${id_carrera}`)
  }
}
