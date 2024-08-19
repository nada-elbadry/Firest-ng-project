import { Component } from '@angular/core';
import { Proudct } from '../interface';
import { RecomndedProudectComponent } from '../recomnded-proudect/recomnded-proudect.component';
import { PlaceholderComponent } from "../placeholder/placeholder.component";
import { NotfoundComponent } from "../notfound/notfound.component";
import { CardComponent } from "../card/card.component";
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecomndedProudectComponent, PlaceholderComponent, NotfoundComponent, CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  Proudcts: Proudct[] = [
    { name: "sneakers", price: 1500, img:"assets/imag/rec1.webp" },
    { name: "sneakers", price: 900, img: "assets/imag/rec2.jpg" },
    { name: "classic", price: 1700, img: "assets/imag/rec3.webp" },
    { name: "Heels", price: 900, img: "assets/imag/rec6.jpeg" },
    { name: "Heels", price: 900, img: "assets/imag/rec7.jpg" },
    { name: "Skate", price: 500, img:"assets/imag/rec8.jpg" },
    { name: "skate", price: 500, img:"assets/imag/rec9.jpg" },
    { name: "sneakers", price: 500, img: "assets/imag/rec10.jpg" },
  ]

}
