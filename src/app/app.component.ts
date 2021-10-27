import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator'
import { CatImages } from './app.models';
import { Services } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'catapi';
  cats: CatImages[] = [];
  pagedList: CatImages[] = [];
  length: number = 0;
  pageSize: number = 20;
  // pageEvent!: PageEvent;

  constructor(private catService: Services) {
    // this.cats = [];
  };

  ngOnInit() {
    this.displayCats();
  }

  displayCats(): void {
    this.catService.getCats().subscribe(data => { 
      this.cats = data;
      this.pagedList = this.cats.slice(0, 20);
      this.length = this.cats.length;
      console.log(this.cats);
    });
  }

  OnPageChange(event: PageEvent): PageEvent {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.cats.slice(startIndex, endIndex);
    return event;
  }
}
