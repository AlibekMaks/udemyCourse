import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'a simply test description',
      'https://dining.queensu.ca/wp-content/uploads/2015/07/Mediterranean-Spinach-and-Quinoa-Salad.jpg'),
    new Recipe(
      'A Test',
      'a simply test description',
      'https://dining.queensu.ca/wp-content/uploads/2015/07/Mediterranean-Spinach-and-Quinoa-Salad.jpg'),

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
