import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  news: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(){
    this.loadNews(this.categories[0]);
  }

  categoryChange(event) {
    this.news = [];
    this.loadNews(event.detail.value);
  }

  loadNews(category){
    this.newsService.getTopHeadlinesCategory(category).subscribe( res => {
      this.news.push( ...res.articles );
    });
  }

}
