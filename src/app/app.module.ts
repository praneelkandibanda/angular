import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstateComponent } from './estate/estate.component';
import { EstateFormComponent } from './estate-form/estate-form.component';
import { EstateEditComponent } from './estate-edit/estate-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EstateImageComponent } from './estate-image/estate-image.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegstrationComponent } from './user-regstration/user-regstration.component';
import { MaterialModule } from 'src/material/material.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserestateComponent } from './userestate/userestate.component';
import { UserestatecardComponent } from './userestatecard/userestatecard.component';
import { UserImageComponent } from './user-image/user-image.component';



@NgModule({
  declarations: [
    AppComponent,
    EstateComponent,
    EstateFormComponent,
    EstateEditComponent,
    EstateImageComponent,
    HomeComponent,
    UserloginComponent,
    UserRegstrationComponent,
    AdminloginComponent,
    UserestateComponent,
    UserestatecardComponent,
    UserImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
