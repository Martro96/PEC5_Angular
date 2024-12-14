import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ArticleItemComponent } from './article-item/article-item.component'; Quito el imput de article-item porque sólo debe apuntar al article-list
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true, // Es un componente independiente
  imports: [ArticleListComponent, NavbarComponent],//añado NavbarComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
