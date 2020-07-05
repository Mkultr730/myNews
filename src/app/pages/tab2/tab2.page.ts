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

  @ViewChild(IonSegment) segment: IonSegment;

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

  loadNews(category, event?){
    this.newsService.getTopHeadlinesCategory(category).subscribe( res => {
      this.news.push( ...res.articles );

      if (event) {
        event.target.complete();
      }

    });
  }

  loadData(event) {
    this.loadNews(this.segment.value, event);
  }

}
