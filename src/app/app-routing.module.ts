import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DogAgeComponent} from './dog-age/dog-age.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path: 'dog-age', component: DogAgeComponent},
  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
