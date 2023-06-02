import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  data:any = [];
  filteredData:any = [];

  baseURL:string = "https://odd-dog-pea-coat.cyclic.app/"

  constructor( public http:HttpClient, private route:ActivatedRoute){};

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.http.get(this.baseURL + "products").subscribe((res:any)=>{
      // console.log("res", res);
      this.data = res;
      this.filterByCategory()
    },
    (err) => {
      console.log(err)
    })
  }

  filterByCategory(){
    this.filteredData = this.data.filter((item:any) => item.subCategory === "Watches")
    console.log("filter",this.filteredData)
  }
}
