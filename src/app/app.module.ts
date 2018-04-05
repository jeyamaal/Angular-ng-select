import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { routing } from './app.routing';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,routing,
    FormsModule,ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
