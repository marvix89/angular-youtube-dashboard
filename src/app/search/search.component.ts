import { SearchService } from './../service/search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../node_modules/@angular/forms';
import { Video } from '../model/video.model';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm : FormControl = new FormControl();
  searchResult : Video[] = [];

  constructor(private searchService: SearchService) {
    this.searchTerm.valueChanges.pipe(debounceTime(400)) 
    .subscribe(data => {
        this.searchService.search_word(data).subscribe(response =>{
            this.searchResult = response
        })
    })

   }

   itemSelected(evt : any) {
    this.searchService.onVideoSelected(evt.option.value);
 }


  ngOnInit() {
  }

}
