import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth-interceptor.service';
import { PeticionModule } from './peticion/peticion.module';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {JwtModule} from '@auth0/angular-jwt';
import { PeticionService } from './peticion/peticion.service';

export function tokenGetter(){
  return localStorage.getItem("auth_token");
}
2;@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PeticionModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains:["example.com"],
        disallowedRoutes:["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },

    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    PeticionService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
