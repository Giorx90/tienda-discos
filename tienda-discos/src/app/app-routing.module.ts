import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home", loadChildren: () =>
      import("../app/components/pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "productos", loadChildren: () =>
      import("../app/components/pages/productos/productos.module").then(m => m.ProductosModule)
  },
  {
    path: "gestion", loadChildren: () =>
      import("../app/components/pages/gestion/gestion.module").then(m => m.GestionModule)
  },
  { path: "", redirectTo: "home", pathMatch: "full" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
