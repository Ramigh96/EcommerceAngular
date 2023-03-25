import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ListecategoriesComponent } from './categories/listecategories/listecategories.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';

const routes: Routes = [
{path:"larticles",component:ListarticlesComponent},
{path:"lcategories",component:ListecategoriesComponent},
{path:"lscategories",component:ListscategoriesComponent},
{path:"insertart",component:InsertarticlesComponent},
{path :"listarticletable",component:ListarticlestableComponent},
{path :"editarticle/:id",component:ModifarticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
