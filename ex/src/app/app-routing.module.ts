import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './accueil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServiceComponent } from './service/service.component';
import { FormulaireComponent } from './formulaire/formulaire.component';



const routes: Routes = [
  {path: "accueil", component:AcceuilComponent},
  {path: "contact", component:ContactComponent},
  {path: "presentation", component:PresentationComponent},
  {path: "service", component:ServiceComponent},
  {path: "formulaire", component: FormulaireComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
