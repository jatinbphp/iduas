import { Component } from '@angular/core';
import { MenuController, ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent 
{
  public appPages = [
    { title: 'Home', url: '/tabs/home', icon: 'home', categories: []},//[0]
    { title: 'Login', url: '/sign-in', icon: 'home', categories: []},//[1]
    { title: 'Funeral Main', url: '/tabs/funeral-main', icon: 'home', categories: []},//[2]
    { title: 'After Death', url: '/tabs/after-death', icon: 'home', categories: []},//[3]
    { title: 'Three', url: '/', icon: 'home', categories: []},//[4]
    { title: 'Four', url: '/', icon: 'home', categories: []},//[5]
    { title: 'Five', url: '/', icon: 'home', categories: []},//[6]
  ];
  constructor(public menu: MenuController) {}
  closeMenu()
  {
    this.menu.close();
  }
}
