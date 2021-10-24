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
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { CursosChatguruComponent } from './paginas/cursos-chatguru/cursos-chatguru.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PerfilComponent,
    RodaPeComponent,
    CursosChatguruComponent
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
    DialogModule,
    PasswordModule,
    DividerModule,
    ProgressSpinnerModule,
    NgCircleProgressModule.forRoot({

      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
