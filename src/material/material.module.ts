import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatTableModule} from '@angular/material/table';
 import {MatCard, MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
   MatTableModule,
   MatFormFieldModule,
   MatInputModule,
   MatPaginatorModule
  ]
})
export class MaterialModule { }