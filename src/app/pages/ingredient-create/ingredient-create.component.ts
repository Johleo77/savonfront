import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient';
import { IngredientService} from '../../services/ingredient.service';


@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})

export class AjouterIngredientComponent implements OnInit {
  ingredient: Ingredient = new Ingredient()

  constructor(private ingredientservice: IngredientService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.ingredientservice.postIngredient(this.ingredient).subscribe({
      next: (response) => {
        console.log('Ingrédient enregistré avec succès:', response);
        alert('Ingrédient enregistré avec succès !');
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement de l\'ingrédient:', error);
        alert('Erreur lors de l\'enregistrement de l\'ingrédient.');
      }
    });
  }
}