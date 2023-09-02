import { Component } from '@angular/core';
import { HttpSerService } from '../http-ser.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
taskLists:any=[];
constructor(private httpp:HttpSerService){

}
ngOnInit(){
this.getdetailsofnewtask()
}
getdetailsofnewtask(){
this.httpp.getdatafromserver('Tasks').subscribe(
  (res:any)=>{
    if(res && res.length > 0){
      this.taskLists = res;
    }}
)}
deleteProduct(index:any,taskobj:any){
  
  const endpoint = "Tasks/"+taskobj.id 
  this.httpp.deletedatafromserver(endpoint).subscribe(
    (response)=>{
      this.taskLists.splice(index,1);
      alert("Task Deleted Succesfully")
      console.log(response)}
      
  )

}
}
