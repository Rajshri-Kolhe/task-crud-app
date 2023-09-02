import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpSerService {

baseurl="http://localhost:3000/"
httpHeaders:HttpHeaders = new HttpHeaders({
  'headers':'HttpHeaders'
})
constructor(private http:HttpClient) { }
postdatatoserver(Endpoint:string,body:any){
  const url = this.baseurl + Endpoint;
return this.http.post(url,body,{headers:this.httpHeaders})
}
getdatafromserver(endpoint:string){
  const url1 = this.baseurl + endpoint;
  return this.http.get(url1,{headers:this.httpHeaders})
}
putdatatoserver(endpoinT:string,body:any){
  const url3 = this.baseurl + endpoinT;
  return this.http.put(url3,body,{headers:this.httpHeaders})
}
deletedatafromserver(endpointt:string){
  const url4 = this.baseurl + endpointt;
  return this.http.delete(url4,{headers:this.httpHeaders})
}
}
