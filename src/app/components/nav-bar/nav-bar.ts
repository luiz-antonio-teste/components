import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css', 'nav-bar-mobile.css']
})
export class NavBar {
  protected logo = "assets/logo/pata-de-ouro-logo.svg"
  protected brandName = 'Pata de Ouro'.toUpperCase();
  protected isSidebarOpen = false;

  protected toggleSidebar():void {
    this.isSidebarOpen = !this.isSidebarOpen;
    const sidebar = document.querySelector('.nav-list');
    if(this.isSidebarOpen) {
      sidebar?.classList.add('active');
      return;
    }
    sidebar?.classList.remove('active');
  }
}


