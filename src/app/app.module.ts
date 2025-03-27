import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AProposComponent } from './pages/apropos/apropos.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { HttpClientModule } from '@angular/common/http';
import { AjouterIngredientComponent } from './pages/ingredient-create/ingredient-create.component';
import { RadarChartComponent } from './shared/radar-chart/radar-chart.component';
import { RecetteComponent } from './pages/recette/recette.component';
import { RecettesCreateComponent } from './pages/create-recette/create-recette.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    AProposComponent,
    IngredientComponent,
    AjouterIngredientComponent,
    RadarChartComponent,
    RecettesCreateComponent,
    RecetteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
