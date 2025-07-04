import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardNews} from './components/card-news/card-news';
import {CardProducts} from './components/card-products/card-products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardNews, CardProducts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'components';
}
