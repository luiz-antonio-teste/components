import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardNews} from './components/card-news/card-news';
import {CardProducts} from './components/card-products/card-products';
import {NavBar} from './components/nav-bar/nav-bar';
import {Copywriting} from './components/copywriting/copywriting';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardNews, CardProducts, NavBar, Copywriting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'components';
}
