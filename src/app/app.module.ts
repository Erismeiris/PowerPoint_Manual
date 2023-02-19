import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppRoutingRoutes } from './app-routing.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { AnimationComponent } from './components/animation/animation.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { TextFormatingComponent } from './components/text-formating/text-formating.component';
import { DrawingsComponent } from './components/drawings/drawings.component';
import { LinkingsComponent } from './components/linkings/linkings.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { TroubleshootingsComponent } from './components/troubleshootings/troubleshootings.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationsComponent,
    AnimationComponent,
    MultimediaComponent,
    TextFormatingComponent,
    DrawingsComponent,
    LinkingsComponent,
    SharingComponent,
    TroubleshootingsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    NgbModule,
    SharedModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
