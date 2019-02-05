import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { GamingComponent } from './pages/gaming/gaming.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';


const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'capabilities', component:CapabilitiesComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'clients', component:ClientsComponent},
    {path:'gaming', component:GamingComponent},
    {path:'team', component:TeamComponent},
    {path:'contact',component:ContactComponent},
    {path:'career', component:CareerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
