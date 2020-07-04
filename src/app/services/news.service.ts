import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  getTopHeadlines(){
    return this.http.get<ResponseTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=275adbf215514cd8939ce3f33d2770ba`);
  }

}
