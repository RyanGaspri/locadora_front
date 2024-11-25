import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InativosComponent } from './components/inativos/inativos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from "@angular/material/select";
import { MatNativeDateModule } from '@angular/material/core';
import { AtualizarComponent } from './components/atualizar/atualizar.component';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadAllComponent,
    InativosComponent,
    CadastroComponent,
    AtualizarComponent,
    LoginComponent,
    

  ],
  imports: [
    MatSelectModule,
    MatNativeDateModule,
    MatSnackBarModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,    
  ],  
  providers: [{provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {  
}
