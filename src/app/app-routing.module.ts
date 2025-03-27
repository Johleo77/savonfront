import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AProposComponent } from './pages/apropos/apropos.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { AjouterIngredientComponent } from './pages/ingredient-create/ingredient-create.component';
import { RecetteComponent } from './pages/recette/recette.component';
import { RecettesCreateComponent } from './pages/create-recette/create-recette.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'Apropos', component: AProposComponent},
  { path: 'ingredient', component: IngredientComponent},
  { path: 'create', component: AjouterIngredientComponent},
  { path: 'createRecette', component: RecettesCreateComponent},
  { path: 'Recette', component: RecetteComponent},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
