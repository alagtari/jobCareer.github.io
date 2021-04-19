import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {
  MatRadioModule
} from '@angular/material/radio';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatIconModule
} from '@angular/material/icon';
//import {MatLabel} from '@angular/material/label'; 

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  NavsComponent
} from './components/navs/navs.component';
import {
  HomePageComponent
} from './pages/home-page/home-page.component';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  LoginPageComponent
} from './pages/login-page/login-page.component';
import {
  SignupPageComponent
} from './pages/signup-page/signup-page.component';

import {
  Routes,
  RouterModule,
  RouteReuseStrategy
} from '@angular/router';
import {
  SlideComponent
} from './components/slide/slide.component';
import {
  FieldComponent
} from './components/field/field.component';
import {
  TestpageComponent
} from './pages/testpage/testpage.component';
import {
  Field2Component
} from './components/field2/field2.component';
import {
  CardEmpoisComponent
} from './components/card-empois/card-empois.component';
import {
  SerchEmpPageComponent
} from './pages/serch-emp-page/serch-emp-page.component';
import {
  CardPostulationComponent
} from './components/card-postulation/card-postulation.component';
import {
  PostulationPageComponent
} from './pages/postulation-page/postulation-page.component';
import {
  CardEmpPostComponent
} from './components/card-emp-post/card-emp-post.component';
import {
  PostedEmpPageComponent
} from './pages/posted-emp-page/posted-emp-page.component';
import * as Hammer from 'hammerjs';

export class CustumHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

const appRoutes: Routes = [{
    path: '',
    component: HomePageComponent
  },

  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: 'offers',
    component: SerchEmpPageComponent,
  },
  {
    path: 'postulation',
    component: PostulationPageComponent,
  },
  {
    path: 'postedoffers',
    component: PostedEmpPageComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    SlideComponent,
    FieldComponent,
    TestpageComponent,
    Field2Component,
    CardEmpoisComponent,
    SerchEmpPageComponent,
    CardPostulationComponent,
    PostulationPageComponent,
    CardEmpPostComponent,
    PostedEmpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
    //MatLabel
  ],
  providers: [{provide:HAMMER_GESTURE_CONFIG  ,useClass:CustumHammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {}
