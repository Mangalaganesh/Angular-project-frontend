import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemainComponent } from './sidemain/sidemain.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule   } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';






@NgModule({
  declarations: [
    AppComponent,
    SidemainComponent,
    AddstudentComponent,
    ViewstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    MatSnackBarModule,
    NgFor
    
     
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
