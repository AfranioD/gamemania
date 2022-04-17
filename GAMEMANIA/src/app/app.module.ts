import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
<<<<<<< HEAD
import { HttpClientModule} from '@angular/common/http';
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

>>>>>>> 3e7686dd5eab010e42d5e38a06d941ace39bf4bc

@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
   
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
=======
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],

>>>>>>> 3e7686dd5eab010e42d5e38a06d941ace39bf4bc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
