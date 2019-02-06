import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppMaterialModule} from "./app-material.module";

import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoginComponent} from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    AppRoutingModule,


    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
