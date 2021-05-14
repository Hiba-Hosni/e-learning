import { Injectable } from '@angular/core';
import {Livre} from '../model/livre';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private url = 'http://localhost:3000/livres';
  constructor(private httpClient: HttpClient) { }
  public getAll(): Observable<Livre[]> {
    return  this.httpClient.get<Livre[]>(this.url);
  }

  public search(param): Observable<Livre[]> {
    return  this.httpClient.get<Livre[]>(this.url  + param);
  }
  public getById(id): Observable<Livre> {
    return  this.httpClient.get<Livre>(this.url + '/' + id);
  }
  public add(livre: Livre): Observable<any> {
    return  this.httpClient.post(this.url , livre);
  }
  public edit(livre: Livre): Observable<any> {
    return  this.httpClient.put(this.url + '/' + livre.id , livre);
  }
  public delete(id): Observable<any> {
    return  this.httpClient.delete(this.url + '/' + id);
  }
}
