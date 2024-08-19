import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecomndedProudectComponent } from './recomnded-proudect/recomnded-proudect.component';
import { GalleryComponent } from './gallery/gallery.component';
// end point in path
export const routes: Routes = 
[
{path:'', redirectTo:'header', pathMatch:'full'},
{path : 'header' , component :HeaderComponent},
{path : 'about' , component :AboutComponent},
{path : 'contact' , component :ContactComponent},
{path : 'portofolio' , component :PortofolioComponent},
{path:'gallery',component:GalleryComponent},
{path : 'footer' , component :FooterComponent},
{path:'**',component:NotfoundComponent},
];
