import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EstateEditComponent } from './estate-edit/estate-edit.component';
import { EstateImageComponent } from './estate-image/estate-image.component';
import { EstateComponent } from './estate/estate.component';
import { HomeComponent } from './home/home.component';
import { UserImageComponent } from './user-image/user-image.component';
import { UserestateComponent } from './userestate/userestate.component';
import { UserestatecardComponent } from './userestatecard/userestatecard.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {
    path:"estates",
    component:EstateComponent
  },
  {
    path:"estates/edit/:id",
    component:EstateEditComponent
  },
  {
    path:"images/:id",
    component:EstateImageComponent
  },
  {
    path:"images",
    component:UserImageComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"userlogin",
    component: UserloginComponent
  },

  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:'userestates',
    component:UserestateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
