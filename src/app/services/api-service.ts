import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

   server_url = "http://localhost:3000"
   http = inject(HttpClient)

  //  api function - get all recipes
  getAllRecipesAPI(){
    return this.http.get(`${this.server_url}/recipes`)
  }

  // register
  registerAPI(user:any){
    return this.http.post(`${this.server_url}/register`,user)
  }

  // login
  loginAPI(user:any){
    return this.http.post(`${this.server_url}/login`,user)
  }

  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }

  // view recipe
  viewRecipeAPI(recipeId:string){
    return this.http.get(`${this.server_url}/recipe/${recipeId}`,this.appendToken())
  }

  // related recipe
  getRelatedRecipeAPI(cuisine:string){
    return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`,this.appendToken())
  }

  // downloads/:id api
  addToDownloadAPI(recipeId:string,reqBody:any){
    return this.http.post(`${this.server_url}/downloads/${recipeId}`,reqBody,this.appendToken())
  }

  //
  addToSaveRecipeAPI(recipeId:string,reqBody:any){
    return this.http.post(`${this.server_url}/recipes/${recipeId}/save`,reqBody,this.appendToken())
  }

  // reqs from user collection component when page loads
  getUserRecipesAPI(){
    return this.http.get(`${this.server_url}/recipe-collection`,this.appendToken())
  }

   // reqs from user collection component when delete btn clicked
  removeUserRecipesAPI(recipeId:string){
    return this.http.delete(`${this.server_url}/recipe-collection/${recipeId}`,this.appendToken())
  }

  // post reqst by contact component when submit btn clicked
  addFeedbackAPI(reqBody:any){
    return this.http.post(`${this.server_url}/feedback`,reqBody)
  }

  // get reqst by profile component when page loads
  getUserDownloadListAPI(){
    return this.http.get(`${this.server_url}/user-downloads`,this.appendToken())
  }
}
