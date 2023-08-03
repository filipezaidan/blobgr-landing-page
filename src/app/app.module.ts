import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { ButtonComponent } from './components/button/button.component';
import { DesignedContentComponent } from './components/designed-content/designed-content.component';
import { InfrastructureContentComponent } from './components/infrastructure-content/infrastructure-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroContentComponent,
    ButtonComponent,
    DesignedContentComponent,
    InfrastructureContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
