import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'Butter Pizza', 'http://www.wasamundi.com/farm/access/var/watermark/wtmk_5462257a9dae5141571826610557039_364392123736199_2315526976401070025_o.jpg'),
    new Recipe('Burger', 'Big burger' , 'https://commentform.marketforce.com/images/BK-WebComment/BB_WHOPPER-v1.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
