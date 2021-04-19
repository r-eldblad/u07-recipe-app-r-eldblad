import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-suggestions',
  templateUrl: './recipe-suggestions.component.html',
  styleUrls: ['./recipe-suggestions.component.css'],
})
export class RecipeSuggestionsComponent implements OnInit {
  recipes: any = [];
  constructor(private recipeData: RecipeService) {}

  ngOnInit(): void {
    this.recipeData.getRecipes().subscribe((recipes) => {
      this.recipes = Array.of(recipes);
      console.log(this.recipes);
    });
  }
}
