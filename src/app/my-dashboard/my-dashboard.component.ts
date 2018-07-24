
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from '../model/video.model';
import { SearchService } from '../service/search.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements OnInit, OnDestroy {
  
  cards : Video[] = [];
  constructor(private searchService : SearchService) {}
  
  ngOnInit(): void {
    this.searchService.videoChanged.subscribe( data => {
        this.cards = data;
    })
  }
  ngOnDestroy(): void {
     this.searchService.videoChanged.unsubscribe();
  }

  
}
