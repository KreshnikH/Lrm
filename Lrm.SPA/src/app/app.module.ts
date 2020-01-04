import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { BsDropdownModule} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { MybooksComponent } from './components/book/mybooks/mybooks.component';
import { BookInfoComponent } from './components/book/book-info/book-info.component';
import { BookDescriptionComponent } from './components/book/book-description/book-description.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RatingComponent } from './components/book/rating/rating.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NewreleasesComponent } from './components/book/newreleases/newreleases.component';
import { ReleasesCardComponent } from './components/book/releases-card/releases-card.component';
import { AuthorProfileComponent } from './components/author/author-profile/author-profile.component';
import { MostTrendingComponent } from './components/book/most-trending/most-trending.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MybooksComponent,
    BookInfoComponent,
    BookDescriptionComponent,
    NavComponent,
    HomeComponent,
    RatingComponent,
    UserProfileComponent,
    UserEditComponent,
    SignupComponent,
    NewreleasesComponent,
    ReleasesCardComponent,
    AuthorProfileComponent,
    MostTrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
