import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string="";
  email: string="";
  number: string="";
  password: string="";

  baseURL:string = "https://odd-dog-pea-coat.cyclic.app/"

  constructor(private http: HttpClient) {}

  onSubmit(): void {

    if(!this.name || !this.email || !this.password || !this.number){
      alert("Empty Input Feilds")
    }
    else{
      let formData = {
        name:this.name,
        email:this.email,
        password:this.password,
        number:Number(this.number),
        usertype:"user"
      }

      console.log(formData)
      this.http.post(this.baseURL + "signup", formData).subscribe((res:any) => {
        alert(res["Message"])
        
      },
      (err) => {
        console.log(err)
      }
      )
    }

  
  }
}