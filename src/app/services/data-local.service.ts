import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  news: Article[]= [];

  constructor(private storage: Storage) {  }

  saveNew(article: Article){

    const val = this.news.find( art => art.title === article.title );

    if (!val) {
      this.news.unshift( article );
      this.storage.set('favorites', this.news);
    }

  }

  loadFavs(){

  }

}
