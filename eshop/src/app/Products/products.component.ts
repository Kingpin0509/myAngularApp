import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  page:any = "";
  data:any = [];
  filteredData:any = [];

  baseURL:string = "https://odd-dog-pea-coat.cyclic.app/"


  constructor(private http:HttpClient, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["name"]
      console.log("Parmas",id);
      this.page=id;
    })

    this.getData(this.page)
  }

  getData(name:string){
    this.http.get(this.baseURL + "products").subscribe((res:any)=>{
      // console.log("res", res);
      this.data = res;
      this.filterByCategory(name)
    },
    (err) => {
      console.log(err)
    })
  }

  filterByCategory(name:string){
    if(name !== "products"){
      this.filteredData = this.data.filter((item:any) => item.subCategory.toLowerCase() === name)
      console.log("filter",this.filteredData)
    }
    else if(name==="products"){
      this.filteredData = this.data;
      console.log("NotFiltered", this.filteredData)
    }
  }
}
