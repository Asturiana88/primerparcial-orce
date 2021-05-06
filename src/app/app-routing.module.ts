import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { ProductosAltaComponent } from './paginas/productos-alta/productos-alta.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { AuthService } from './servicios/auth.service';
import { LoggedCanActivateService } from './servicios/logged-can-activate.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'productos', component: ProductosComponent, canActivate: [LoggedCanActivateService]
  },
  {
    path: 'productos/alta', component: ProductosAltaComponent, canActivate: [LoggedCanActivateService]
  },
  {
    path: 'login', component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, LoggedCanActivateService]
})
export class AppRoutingModule { }
