import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeviceService } from '../service/sevice.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  todoform:any
  constructor(private service:SeviceService, private router:Router) { }

  ngOnInit(): void {
    this.todoform = new FormGroup({
      "title" : new FormControl (null,[Validators.required]),
      "notes" : new FormControl (null,[Validators.required]),
     })
   }
  
  submittodo(){
    this.service.posttodo(this.todoform.value)
    .subscribe({
      next:()=>{
        alert("Your Todo task will saved");
        this.todoform.reset();
        this.redirectpage();
      },
      error:()=>{
        alert("Error in Feactiing in database");
      }
    })
  }

  redirectpage(){
    this.router.navigateByUrl("/view");
  }

  canceltodo(){
    this.router.navigateByUrl("/");
  }

  get title(){
    return this.todoform.get("title");
  }
  get notes(){
    return this.todoform.get("notes");
  }


}
