import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  public username:string="";
  
  @Input('username') set setUsername(username:string){
    this.username=username;
  }

  @Output()  headercomp:EventEmitter<string> = new EventEmitter<string>();


  itemSelected(item:string){
    this.headercomp.emit(item);
  }
}
