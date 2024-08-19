import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { RecomndedProudectComponent } from './recomnded-proudect/recomnded-proudect.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent,HeaderComponent,AboutComponent,PortofolioComponent,ContactComponent,RecomndedProudectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'as1';
}
