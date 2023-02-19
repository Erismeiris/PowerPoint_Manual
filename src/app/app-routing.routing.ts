import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionsComponent } from './components/introductions/introductions.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { AnimationComponent } from './components/animation/animation.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { TextFormatingComponent } from './components/text-formating/text-formating.component';
import { DrawingsComponent } from './components/drawings/drawings.component';
import { LinkingsComponent } from './components/linkings/linkings.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { TroubleshootingsComponent } from './components/troubleshootings/troubleshootings.component';

const routes: Routes = [
  {path:'introduction', component:IntroductionsComponent},
  {path:'interface', component: InterfaceComponent},
  {path:'presentation', component: PresentationsComponent},
  {path:'animation', component: AnimationComponent},
  {path:'multimedia', component:MultimediaComponent},
  {path:'text-formating', component: TextFormatingComponent},
  {path:'drawing', component: DrawingsComponent},
  {path:'linking', component: LinkingsComponent},
  {path:'sharing', component: SharingComponent},
  {path:'troubleshooting', component: TroubleshootingsComponent},
  {path:'', component: IntroductionsComponent},
  {path:'**', redirectTo:'/IntroductionsComponent', pathMatch: "full"},
 
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingRoutes{}
