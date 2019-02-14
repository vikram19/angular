import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen:Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSlideMenu(){
    if(this.isOpen){
      document.getElementById('sidebar').style.width= '250px';
      this.isOpen = false;
    } else{
      document.getElementById('sidebar').style.width= '0px';
      this.isOpen = true;
    }
  }
}
