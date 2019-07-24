import { SearchComponent } from './search/search.component';
import { ShowToursComponent } from './show-tours/show-tours.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: LoginFormComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'show', component: ShowToursComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
