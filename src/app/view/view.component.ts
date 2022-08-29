import { Component, OnInit } from '@angular/core';
import { SeviceService } from '../service/sevice.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  todolist:any
  constructor(private service:SeviceService) {
   this.gettodolist()
  }

  ngOnInit(): void {

  }
  gettodolist(){
    this.service.gettodo().subscribe(data=>{
      this.todolist=data;
    });
  }

   tododetete(row:any){
    this.service.deletetodo(row.id).subscribe(res=>{
      alert("Todo task deleated successfully");
      this.gettodolist();
     })
    }
}
