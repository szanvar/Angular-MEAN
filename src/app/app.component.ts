import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  title = 'Client';
  public data : any = [];
  constructor(private service : AppServiceService)
  {  }

  ngOnInit()
  {
    //this.getBatchesFromAPI();
    //this.getDetailsAPI();
  }

  getBatchesFromAPI()
  {
      this.service.getBatches().subscribe(Response => this.data = Response);
      //this.service.getBatches().subscribe((Response) => {
      //console.log("Data from Server", Response)      
      //})
   
  }

  // getDetailsAPI()
  // {
  //   this.service.getDetails().subscribe((res) => {
  //     console.log(res);
  //   });
  // }
 
}