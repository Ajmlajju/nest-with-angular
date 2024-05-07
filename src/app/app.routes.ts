import { Routes } from '@angular/router';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { CardComponent } from './unit/card/card.component';
import { CarousalComponent } from './unit/carousal/carousal.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:CarousalComponent},
    {path:"dept",component:CardComponent},
    {path:"contact",component:ContactComponent}
];
