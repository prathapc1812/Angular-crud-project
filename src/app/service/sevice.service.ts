import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeviceService {

  constructor(private http:HttpClient) { }

  posttodo(data:any){
    return this.http.post<any>('http://localhost:3000/posts',data)
  }
  gettodo(){
    return this.http.get<any>('http://localhost:3000/posts')
  }
  edittodo(id:any){
    return this.http.get<any>('http://localhost:3000/posts/'+id)
  }
  updattodo(id:any ,data:any){
    return this.http.put<any>('http://localhost:3000/posts/'+id,data);
  }
  deletetodo(id:number){
    return this.http.delete<any>('http://localhost:3000/posts/'+id);
  }

}
