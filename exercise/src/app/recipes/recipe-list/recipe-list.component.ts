import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is a test cuccurucu', 'https://toriavey.com/images/2011/01/TOA109_18-1-500x500.jpeg'),
    new Recipe('A test recipe','This is a test cuccurucu', 'https://toriavey.com/images/2011/01/TOA109_18-1-500x500.jpeg'),
  ];
}
