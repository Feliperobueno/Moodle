import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './paginas/home/home.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import { RodaPeComponent } from './paginas/roda-pe/roda-pe.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PerfilComponent,
    RodaPeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ProgressBarModule,
    ToastModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    AccordionModule,
    ModalModule.forRoot(),
    DialogModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
