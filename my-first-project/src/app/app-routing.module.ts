import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductionLineSchematicComponent } from './production-line-schematic/production-line-schematic.component';
import { ContentsComponent } from './contents/contents.component';
import { ModifyDeleteComponent } from './modify-delete/modify-delete.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { PanSpaceComponent } from './pan-space/pan-space.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


const appRoutes: Routes =
  [

    { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'landingPage', component: LandingPageComponent },
    { path: 'productionLineSchematic', component: ProductionLineSchematicComponent },
    { path: 'contents', component: ContentsComponent },
    { path: 'modifyDelete', component: ModifyDeleteComponent },
    { path: 'leftPanel', component: LeftpanelComponent },
    { path: 'panSpace', component: PanSpaceComponent },
    { path: 'toolbar', component: ToolbarComponent },
    { path: '**', redirectTo: 'landingPage' }
  ]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }