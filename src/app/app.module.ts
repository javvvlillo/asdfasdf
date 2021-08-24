import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { APPROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { InputComponent } from './components/input/input.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ButtonComponent } from './componets/shared/button/button.component';
import { ZXingScannerModule } from "@zxing/ngx-scanner";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ScannerComponent,
    InputComponent,
    ProductComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING,
    FormsModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
