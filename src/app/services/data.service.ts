import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  public getData(): Observable<Data[]>  {
    return this.http.get<Data[]>("../../assets/data/data.json");
  }
}