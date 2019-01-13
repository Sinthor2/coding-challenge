import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  private data: Data[] = [];
  public filteredData: Data[] = [];
  public startDate: Date;
  public endDate: Date;

  // Importing a service into a component is not a good practice. Normally i would develop a "sandbox"-service which acts as a facade between components and services.
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        this.filteredData = this.data;
        this.setStartEndDate();
      },
      (error) => {
        console.log(error);
      });
  }

  public setStartEndDate(): void {
    // set the start date to the lowest date
    this.startDate = new Date(this.data.reduce((prev, curr) => {
      return new Date(prev.start_date).getTime() <= new Date(curr.start_date).getTime() ? prev : curr;
    }).start_date);
    // set the end date to the highest date
    this.endDate = new Date(this.data.reduce((prev, curr) => {
      return new Date(prev.end_date).getTime() >= new Date(curr.end_date).getTime() ? prev : curr;
    }).end_date);
  }
  public resetFilters(): void {
    this.filteredData = this.data;
    this.setStartEndDate();
  }
  public startDateChanged(date): void {
    this.startDate = new Date(date.value);
    this.filteredData = this.filteredDate();
  }
  public endDateChanged(date): void {
    this.endDate = new Date(date.value);
    this.filteredData = this.filteredDate();
  }
  private filteredDate(): Data[] {
    // returns an array of data-objects whose start and end dates are between the start/end date filter values 
    return this.data.filter(d => (new Date(d.start_date).getTime() >= this.startDate.getTime()) && (new Date(d.end_date).getTime() <= this.endDate.getTime()));
  }

  public sortData(sort: { active: string, direction: string }): void {
    this.filteredData.sort(this.sortMethod(sort));
  }
  //custom sort method
  private sortMethod(sort: { active: string, direction: string }): (a: any, b: any) => number {
    // set the order-direction
    var sortOrder = sort.direction === "asc" ? 1 : -1;
    return function (a: Data, b: Data) {
      // use a different comparison if the field-type is date
      if (sort.active === "start_date" || sort.active === "end_date") {
        return (new Date(a[sort.active]).getTime() - new Date(b[sort.active]).getTime()) * sortOrder;
      } else {
        var result = (a[sort.active] < b[sort.active]) ? -1 : (a[sort.active] > b[sort.active]) ? 1 : 0;
        return result * sortOrder;
      }
    }
  }
}
