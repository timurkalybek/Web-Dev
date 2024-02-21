import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductItemComponent} from "./product-item/product-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-app';
}
