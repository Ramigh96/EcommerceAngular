import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Scategories} from '../models/scategories'

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  baseurl="http://localhost:3001/api/scategories";
  constructor(private http:HttpClient) { }
  ListCategories():Observable<Scategories[]>
 {
 return this.http.get<Scategories[]>(this.baseurl);
 }
 getscategorie(id:object):Observable<Scategories>
 {
 return this.http.get<Scategories>(this.baseurl+ '/' + id);
 }
}
