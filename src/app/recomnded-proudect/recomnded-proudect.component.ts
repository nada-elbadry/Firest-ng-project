import { Component } from '@angular/core';
import { Proudct } from '../interface';
import { CardComponent } from "../card/card.component";
@Component({
  selector: 'app-recomnded-proudect',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './recomnded-proudect.component.html',
  styleUrl: './recomnded-proudect.component.css'
})
export class RecomndedProudectComponent 
{
  ProudectRecomended: Proudct[] = [
    { name: "Stars Football Shoe", price: 500, img:"assets/imag/p-1.jpeg" },
    { name: "Stars Football Shoe", price: 500, img: "assets/imag/p-2.jpeg" },
    { name: "sneakers", price: 500, img: "assets/imag/p-3.jpeg" },
    { name: "sneakers", price: 500, img: "assets/imag/p-4.jpeg" },
    { name: "Heels", price: 500, img: "assets/imag/p-5.jpeg" },
    { name: "Heels", price: 500, img: "assets/imag/p-6.jpeg" },
    { name: "Crocs", price: 500, img: "assets/imag/p-7.jpeg" },
    { name: "Crocs", price: 500, img: "assets/imag/p-8.jpeg" },
    { name: "Shoes LED Full", price: 500, img: "assets/imag/p-9.jpeg" },
    { name: "Shoes LED Full", price: 500, img: "assets/imag/p-10.jpeg" },

  ]
}
