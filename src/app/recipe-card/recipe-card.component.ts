import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  recipes: any = [];
  constructor(private recipeData: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeData.getRecipes();
    console.log(this.recipes);
  }
}
