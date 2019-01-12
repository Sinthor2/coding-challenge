import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  public data: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log(error);
      });
  }

}
