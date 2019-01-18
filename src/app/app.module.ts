import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LoaderComponent } from './loader/loader.component'

import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EnemyListModule } from './enemy-list/enemy-list.module'

@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatProgressSpinnerModule,
        EnemyListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
