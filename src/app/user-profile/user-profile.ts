import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [Header,Footer,FormsModule,RouterLink],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  
  api = inject(ApiService)
  downloadList:any = signal([])
  username:string = ""
  userImage:string = "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"

  ngOnInit(){
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user")||"")
      this.username = user.username
    }
    this.getUserDownloadList()
  }

  getUserDownloadList(){
    this.api.getUserDownloadListAPI().subscribe((res:any)=>{
      this.downloadList.set(res)
      console.log(this.downloadList());
    })
  }

}
