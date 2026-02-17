import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';

@Injectable({
    providedIn: 'root'
})

export class SeriesService {
    private apiUrl = 'https://peticiones.online/api/series';

    constructor(private http: HttpClient) { }

    // GET
    getAll(): Observable<Serie[]> {
        return this.http.get<Serie[]>(this.apiUrl);
    }

    // POST
    create(serie: Serie): Observable<Serie> {
        return this.http.post<Serie>(this.apiUrl, serie);
    }

    //PUT
    //update(id: number, post: Serie) {
    //    return this.http.put<Serie>(`${this.url}/${id}`, post);
    // }

    //DELETE
    //delete(id: number) {
    //    return this.http.delete<void>(`${this.url}/${id}`);
    //}

}