import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seccion } from '../models/secciones';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  private apiUrl = "http://localhost:8080/api/secciones";

  constructor(private http: HttpClient) {}

  getSecciones(): Observable<Seccion[]> {
    return this.http.get<Seccion[]>(this.apiUrl);
  }
}
