import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HaderComponent } from './hader/hader.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MeuTopTresComponent } from './meu-top-tres/meu-top-tres.component';

import {ROUTES} from './app.routes';
import { RouterModule } from '@angular/router';
import { LansamentosComponent } from './lansamentos/lansamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HaderComponent,
    FooterComponent,
    MenuComponent,
    MeuTopTresComponent,
    LansamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
