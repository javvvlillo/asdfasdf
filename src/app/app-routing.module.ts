import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InputComponent } from "./components/input/input.component";
import { ProductComponent } from "./components/product/product.component";
import { ScannerComponent } from "./components/scanner/scanner.component";

const APPROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'scanner', component: ScannerComponent},
  { path: 'input', component: InputComponent },
  { path: 'product/:code', component: ProductComponent },
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APPROUTING = RouterModule.forRoot(APPROUTES);