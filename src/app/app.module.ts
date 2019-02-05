import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { GamingComponent } from './pages/gaming/gaming.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CareerComponent } from './pages/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CapabilitiesComponent,
    PortfolioComponent,
    ClientsComponent,
    GamingComponent,
    TeamComponent,
    ContactComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
