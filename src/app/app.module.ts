import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { AutresVoyagesComponent } from './components/autres-voyages/autres-voyages.component';
import { DernierArticleComponent } from './components/dernier-article/dernier-article.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescriptionComponent } from './components/description/description.component';
import { AvisComponent } from './components/avis/avis.component';
import { AutresImagesComponent } from './components/autres-images/autres-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    HeaderComponent,
    AutresVoyagesComponent,
    DernierArticleComponent,
    FooterComponent,
    DescriptionComponent,
    AvisComponent,
    AutresImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
