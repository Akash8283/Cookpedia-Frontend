import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipeModel } from '../model/recipeModel';

@Component({
  selector: 'app-admin-manage-recipe',
  standalone: false,
  templateUrl: './admin-manage-recipe.html',
  styleUrl: './admin-manage-recipe.css',
})
export class AdminManageRecipe {
  
  route = inject(ActivatedRoute)
  recipeID = this.route.snapshot.params['id']
  recipeDetails:recipeModel = {}
  ingredientsArray:any = []
  instructonArray:any = []
  mealTypeArray:any = []
  
  addIngredints(ingredientInput:any){
     if (ingredientInput.value) {
      this.ingredientsArray.push(ingredientInput.value)
      ingredientInput.value = ""
     }
  }
  removeIngredient(value:string){
    this.ingredientsArray = this.ingredientsArray.filter((item:string)=>item!=value)
  }

  addInstruction(instructionInput:any){
     if (instructionInput.value) {
      this.instructonArray.push(instructionInput.value)
      instructionInput.value = ""
     }
  }
  removeInstruction(value:string){
    this.instructonArray = this.instructonArray.filter((item:string)=>item!=value)
  }

  addMeal(mealInput:any){
     if (mealInput.value) {
      this.mealTypeArray.push(mealInput.value)
      mealInput.value = ""
     }
  }
  removeMeal(value:string){
    this.mealTypeArray = this.mealTypeArray.filter((item:string)=>item!=value)
  }
}
