import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MybooksComponent } from './components/book/mybooks/mybooks.component';
import { BookDescriptionComponent } from './components/book/book-description/book-description.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthorProfileComponent } from './components/author/author-profile/author-profile.component';
import { AuthGuard } from './_guards/auth.guard';
const routes: Routes = [

  {path: 'home', component: HomeComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: 'user', component: UserProfileComponent},
      {path: 'user-edit', component: UserEditComponent},
      {path: 'mybooks', component: MybooksComponent},
      {path: 'book/:id', component: BookDescriptionComponent },
      {path: 'author', component: AuthorProfileComponent },
    ]
  },
  { path: 'signup', component: SignupComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
