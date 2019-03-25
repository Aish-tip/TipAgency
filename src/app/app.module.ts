import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { BrandingComponent } from './capabilities-sub/branding/branding.component';
import { StrategyComponent } from './capabilities-sub/strategy/strategy.component';
import { WebDesignComponent } from './capabilities-sub/web-design/web-design.component';
import { SoftwareDesignComponent } from './capabilities-sub/software-design/software-design.component';
import { VideoComponent } from './capabilities-sub/video/video.component';
import { SocialMediaComponent } from './capabilities-sub/social-media/social-media.component';
import { ContentComponent } from './capabilities-sub/content/content.component';
import { PrintPackagingComponent } from './capabilities-sub/print-packaging/print-packaging.component';
import { IllustrationsComponent } from './capabilities-sub/illustrations/illustrations.component';
import { SavyasachiComponent } from './client-sub/savyasachi/savyasachi.component';
import { HudaBarComponent } from './client-sub/huda-bar/huda-bar.component';
import { LakeviewComponent } from './client-sub/lakeview/lakeview.component';
import { SevenbeansComponent } from './client-sub/sevenbeans/sevenbeans.component';
import { KingfisherComponent } from './client-sub/kingfisher/kingfisher.component';
import { NizantaComponent } from './client-sub/nizanta/nizanta.component';
import { JeanrochComponent } from './client-sub/jeanroch/jeanroch.component';
import { CraftedHolidaysComponent } from './client-sub/crafted-holidays/crafted-holidays.component';
import { LancomeComponent } from './client-sub/lancome/lancome.component';
import { CraftedTripsComponent } from './client-sub/crafted-trips/crafted-trips.component';
import { SarayuComponent } from './client-sub/sarayu/sarayu.component';
import { ThiasholaComponent } from './client-sub/thiashola/thiashola.component';
import { HouseOfSatoriComponent } from './client-sub/house-of-satori/house-of-satori.component';
import { KandavaraComponent } from './client-sub/kandavara/kandavara.component';
import { AksharaComponent } from './client-sub/akshara/akshara.component';


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
    CareerComponent,
    BrandingComponent,
    StrategyComponent,
    WebDesignComponent,
    SoftwareDesignComponent,
    VideoComponent,
    SocialMediaComponent,
    ContentComponent,
    PrintPackagingComponent,
    IllustrationsComponent,
    SavyasachiComponent,
    HudaBarComponent,
    LakeviewComponent,
    SevenbeansComponent,
    KingfisherComponent,
    NizantaComponent,
    JeanrochComponent,
    CraftedHolidaysComponent,
    LancomeComponent,
    CraftedTripsComponent,
    SarayuComponent,
    ThiasholaComponent,
    HouseOfSatoriComponent,
    KandavaraComponent,
    AksharaComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
