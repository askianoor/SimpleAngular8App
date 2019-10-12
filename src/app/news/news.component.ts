import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news$: object;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData().subscribe(
      api => this.news$ = api
    );
  }

  // ngOnDestroy() {
  //   console.log('News component is destroyed!');
  //  }

}
