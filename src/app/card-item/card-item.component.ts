import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../model/video.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() element : Video;
  
  constructor() { }

  ngOnInit() {
  }

}
