import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseurl = "http://localhost:3001/api/articles";
  constructor(private http: HttpClient) { }
  ListArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>(this.baseurl);
  }
  Deletearticle(id: object): Observable<Articles> {
    return this.http.delete<Articles>(this.baseurl + '/' + id);
  }
  Addarticle(art: Articles): Observable<Articles> {
    return this.http.post<Articles>(this.baseurl, art)
  }
  UpdateArticle(id: object, art: Articles): Observable<Articles> {
    return this.http.put<Articles>(this.baseurl + '/' + id, art);

  }
  GetArticle(id:object):Observable<Articles>
{
return this.http.get<Articles>(this.baseurl+ '/' + id);
}


}
