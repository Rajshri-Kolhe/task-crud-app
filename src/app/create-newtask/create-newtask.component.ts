import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpSerService } from '../http-ser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-newtask',
  templateUrl: './create-newtask.component.html',
  styleUrls: ['./create-newtask.component.css']
})
export class CreateNewtaskComponent {
  createnewtask!:FormGroup;
  taskid!:any;
  iseditable:boolean = false;

   isReadOnly:boolean=false;

// For DropDown
//  Status: string[] = ['Completed', 'Partially Completed', 'Not Yet Started'];
//   default: string = 'completed';
// statusForm: FormGroup;

constructor(private fb:FormBuilder, private Http:HttpSerService,
  private route:Router,private route1:ActivatedRoute){
//   this.statusForm = new FormGroup({
//     status: new FormControl(null)
// });
// this.statusForm.controls['status'].setValue(this.default, {onlySelf: true});

this.taskid = route1.snapshot.paramMap.get('id');
if(this.taskid){
this.iseditable = true;
}

};

ngOnInit(){
this.createtaskform ()
if(this.iseditable){
  this.gettaskdetailsbyid()
}

}
createtaskform(){
  this.createnewtask = this.fb.group({
    'id':[{value: '', disabled: true}],
    'taskname':[''],
    'days':[''],
    'status':[''],
    'remark':[''],
  })
}
gettaskdetailsbyid(){
  const endPoint = "Tasks/" + this.taskid;
  this.Http.getdatafromserver(endPoint).subscribe(
    (next)=>{
      this.createnewtask.patchValue(next)
    },
    ()=>{}
  )
}


savetaskdetails(){
 console.log(this.createnewtask.value)
 this.Http.postdatatoserver('Tasks',this.createnewtask.value).subscribe(
  (res)=>{console.log(res)},
 ()=>{}
); 
 //this.route.navigate(['/tasks/task-list']);
  }

  updatetaskdetails(){
    const endpointt = "Tasks/"+ this.taskid
    this.Http.putdatatoserver(endpointt,this.createnewtask.value).subscribe(
      (next)=>{console.log(next)},
      ()=>{}
    )
    //  this.route.navigate(['/tasks/task-list']);
  }
  savetask(){
    if(this.iseditable){
this.updatetaskdetails();
this.isReadOnly = false;
alert("Task Updated Succesfully");
this.route.navigate(['/tasks/task-list'])

}else{
  this.savetaskdetails();
   this.isReadOnly = true;
  alert("Task Saved Succesfully");
  this.route.navigate(['/tasks/task-list'])

}
    }

  
  
}
