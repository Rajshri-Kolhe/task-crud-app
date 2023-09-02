import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpSerService } from '../http-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
signupform!:FormGroup;
constructor(private fb:FormBuilder,private httpp:HttpSerService,private routes:Router){
}
ngOnInit(){
  this.createsignupform()
}
createsignupform(){
  this.signupform = this.fb.group({
    "name":[''],
    "dept":[''],
    "email":[''],
    "password":[''],
  })
}
savesignupform(){
  console.log("signup response",this.signupform.value);
  this.httpp.postdatatoserver('users',this.signupform.value).subscribe(
    (nextresp)=>{console.log("signup response received is",nextresp)},
    (Error)=>{console.log("Error is",Error)}
  )
  this.routes.navigate(['/login'])
  
}
}
