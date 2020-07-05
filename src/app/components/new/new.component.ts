import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})

export class NewComponent implements OnInit {

  @Input() new: Article;
  @Input() index: number;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  goToNew() {
    const browser = this.iab.create(this.new.url, '_system');
  }

}
