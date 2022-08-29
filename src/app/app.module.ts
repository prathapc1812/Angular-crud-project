import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes = [
  
  {path:'',component:HomeComponent},
  {path:'addtodo',component:AddtodoComponent},
  {path:'view',component:ViewComponent},
  {path:'edit/:id',component:EditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    EditComponent,
    NavbarComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
