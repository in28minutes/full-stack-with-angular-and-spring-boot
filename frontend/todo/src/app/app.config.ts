import { ApplicationConfig } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Works for all the Angular Versions
import { importProvidersFrom } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { provideRouter } from '@angular/router'; // For Angular 17 onwards
import { routes } from './app.routes'; // For Angular 17 onwards

export const appConfig: ApplicationConfig = {
    // if you're using NgModule use AppRoutingModule use the AppRoutingModule 
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
    // For Angular 17 onwards you can use routes and provideRouter
    //providers: [importProvidersFrom(BrowserModule, FormsModule), provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true },
    provideHttpClient(withInterceptorsFromDi())]
};