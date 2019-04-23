import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/navbar/navbar.component';
import { LoginComponent } from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/login/login.component';
import { RegisterComponent } from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/register/register.component';
import { HomeComponent } from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/home/home.component';
import { DashboardComponent } from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/dashboard/dashboard.component';
import { ProfileComponent } from '/home/dell/Desktop/CITIBRIDGE/nodejsday4/TradeReco/src/app/component/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
