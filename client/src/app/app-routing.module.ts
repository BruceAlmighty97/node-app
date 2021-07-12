import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubPageComponent } from './components/github-page/github-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/github', pathMatch: 'full' },
  { path: 'github', component: GithubPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
