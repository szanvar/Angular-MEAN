import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { batchData } from './Data';

@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  constructor(private http : HttpClient) 
  {  }

  getBatches() : Observable<batchData[]>
  {
    return this.http.get<batchData[]>('/server/getBatches');     
  }

  // getDetails()
  // {
  //   return this.http.get('/server/getAdminDetails');
  // }
}
