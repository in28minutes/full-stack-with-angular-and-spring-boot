import { ApplicationConfig } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { importProvidersFrom } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';


export const appConfig: ApplicationConfig = {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true },
    provideHttpClient(withInterceptorsFromDi())]
};