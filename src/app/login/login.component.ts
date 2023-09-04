import { Component } from '@angular/core';
import { HttpSerService } from '../http-ser.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isnew:Boolean=false;
  loginform!:FormGroup;

  constructor(private fb:FormBuilder,private http1:HttpSerService, private routess:Router){
}
ngOnInit(){
  console.log("ngOnInit is initiated")
this.createloginform()
}
createloginform(){
  this.loginform = this.fb.group({
    'email':[''],
    'password':[''],
  })
}
savelogin(){
  const endPoint = "users?email=" + this.loginform.value.email + "&&password=" + this.loginform.value.password;
  this.http1.getdatafromserver(endPoint).subscribe(
    (el: any) => {
      if (el && el.length > 0) {
        this.isnew = false;
        alert("logged succesfully")
        this.routess.navigate(['/Home'])
      }
      else {
        this.isnew = true;
       
      }
    })
}
}
  


