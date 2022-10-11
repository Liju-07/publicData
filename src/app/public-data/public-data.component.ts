import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-data',
  templateUrl: './public-data.component.html',
  styleUrls: ['./public-data.component.css']
})
export class PublicDataComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetchData()
   }

fetchData=()=>{
  this.api.user().subscribe(
    (data)=>{
      this.userData=data
    }
  )
}

  userData:any={}
  ngOnInit(): void {
  }

}
