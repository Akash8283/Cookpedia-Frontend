import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { recipeModel } from '../admin/model/recipeModel';

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

  // put reqst by profile component when pic uploads
  editUserPictureAPI(reqBody:any){
    return this.http.put(`${this.server_url}/user-edit`,reqBody,this.appendToken())
  }

  // get rqst by home page component when it loads
  getApprovedFeedbackAPI(){
    return this.http.get(`${this.server_url}/feedbacks-approve`)
  }

  // get reqst by admin userlist component when page loads
  getUserListAPI(){
    return this.http.get(`${this.server_url}/user-list`,this.appendToken())
  }

  // get reqst by admin downloadlist component when page loads
  getDownloadListAPI(){
    return this.http.get(`${this.server_url}/downloads`,this.appendToken())
  }

  // get reqst by admin feedback component when page loads
  getFeedbackListAPI(){
    return this.http.get(`${this.server_url}/feedbacks`,this.appendToken())
  }

  // put reqst by admin feedback component when approve/reject btn clicked
  updateFeedbackStatusAPI(id:string,reqBody:any){
    return this.http.put(`${this.server_url}/feedbacks/${id}`,reqBody,this.appendToken())
  }

  // post reqst by admin manage recipe component when add recipe button clicked
  addRecipeAPI(reqBody:recipeModel){
    return this.http.post(`${this.server_url}/recipes`,reqBody,this.appendToken())
  }

}
