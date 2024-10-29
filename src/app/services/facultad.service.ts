import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facultad } from '../models/facultad';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private apiUrl = "http://localhost:8080/api/facultades"
  constructor(private http:HttpClient) { }

  getFacultades():Observable<Facultad[]>{
    return this.http.get<Facultad[]>(`${this.apiUrl}`);
  }

  crearFacultad(facultad: Facultad):Observable<Facultad>{
    return this.http.post<Facultad>(this.apiUrl, facultad);
  }

  getFacultadById(id_facultad: number):Observable<Facultad>{
    return this.http.get<Facultad>(`${this.apiUrl}/${id_facultad}`);
  }

  actualizarFacultad(facultad: Facultad):Observable<Facultad>{
    return this.http.put<Facultad>(this.apiUrl, facultad);
  }

  deleteFacultad(id_facultad:number){
    return this.http.delete(`${this.apiUrl}/${id_facultad}`)
  }
}
