import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  news: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(){
    this.loadNews();
  }

  loadData(event) {
    this.loadNews(event);
  }

  loadNews( event? ) {
    this.newsService.getTopHeadlines()
      .subscribe(res => {

        if (res.articles.length === 0) {
          event.target.disabled = true;
          return;
        }
      
        this.news.push( ...res.articles );

        if (event) {
          event.target.complete();
        }
      });
  }

}
