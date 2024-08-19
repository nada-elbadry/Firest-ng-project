import { Component, Input } from '@angular/core';
import { Proudct } from '../interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input({ required:true}) p!:Proudct;
}
