import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {WelcomeComponent} from './welcome/welcome.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';

import {AuthService} from "./auth/auth.service";
import {AuthModule} from "./auth/auth.module";
import {TrainingService} from "./training/training.service";
import {HttpClientModule} from "@angular/common/http";

import {AuthGuard} from "./auth/auth.guard";
import {UIService} from "./shared/ui.service";
import {SharedModule} from "./shared/shared.module";
import {JwtModule} from "@auth0/angular-jwt";
import {ManagePeriodicTokenRefresh} from "./auth/manage-periodic-token-refresh.service";


export function tokenGetter(): string | null {
    console.log(
        '%c localStorage.getItem(access): ',
        'background: white; ' +
        'color: #000; ' +
        'padding: 10px; ' +
        'border: 1px solid red'
    );
    console.log(localStorage.getItem('access'))
    return localStorage.getItem('access');
}

@NgModule({
    declarations: [
        AppComponent,


        WelcomeComponent,
        HeaderComponent,
        SidenavListComponent,

    ],
    imports: [

        JwtModule.forRoot(
            {
                config:
                    {
                        tokenGetter,
                        allowedDomains: [
                            'localhost:4200',
                            'localhost:8000',
                            // environment.host
                        ],
                        disallowedRoutes: [
                            "http://localhost:8000/api/user/create/"
                        ],
                        skipWhenExpired: false,
                        // throwNoTokenError: true
                    }
            }
        ),

        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        AuthModule,
        // TrainingModule
    ],
    providers: [
        ManagePeriodicTokenRefresh,
        AuthService,
        AuthGuard,
        TrainingService,
        UIService
    ],
    bootstrap: [AppComponent],

})
export class AppModule {
}
