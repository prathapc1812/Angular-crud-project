import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { SeviceService } from '../service/sevice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  todoform = new FormGroup({
    title : new FormControl(''),
    notes : new FormControl('')
  })
  constructor(private service:SeviceService, private route:ActivatedRoute ,private router:Router ) { }

  ngOnInit(): void {
    this.service.edittodo(this.route.snapshot.params['id']).subscribe((result)=>{
      this.todoform = new FormGroup({
        title : new FormControl(result['title']),
        notes : new FormControl(result['notes'])
      })
    })
  }

  todoupdate(){
    this.service.updattodo(this.route.snapshot.params['id'],this.todoform.value)
    .subscribe({
      next:()=>{
        alert("Your Todo was updated successfully");
        this.todoform.reset();
        this.redirectpage();
      },
      error:()=>{
        alert("Error in database");
      }
    })
  }
  redirectpage(){
    this.router.navigateByUrl("/view");
  }

  todocancel(){
    this.router.navigateByUrl("/view")
  }

  get title() { return this.todoform.get("title")};
  get notes() { return this.todoform.get("notes")};
}
