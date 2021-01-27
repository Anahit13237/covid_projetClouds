import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { Covid_news } from '../covid_news.model';
import { User } from '../user.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  user: User;
  covid_news : Covid_news[];
  constructor(public covidService : CovidService) { }

  ngOnInit(): void {
    this.user = this.covidService.getUser();
    //this.covidService.getCovid_news().subscribe((covid: Covid_news[])){
    //this.covid_news = covid;
  // }
  }

}
