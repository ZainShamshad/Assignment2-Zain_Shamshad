import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-site';

  data:string = "";
  username:string="";

  homeSender(item:string){
    this.data = item;
  }

  loginSender(username:string){
    this.username=username;
  }

}
