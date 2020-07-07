import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  news: Article[]= [];

  constructor(private storage: Storage) { 
    this.loadFavs();
   }

  saveNew(article: Article){

    const val = this.news.find( art => art.title === article.title );

    if (!val) {
      this.news.unshift( article );
      this.storage.set('favorites', this.news);
    }

  }

  async loadFavs(){

    const favs = await this.storage.get('favorites');
    console.log('Favorites', favs);

    if (favs) {
      this.news = favs;    
    }

  }

}
