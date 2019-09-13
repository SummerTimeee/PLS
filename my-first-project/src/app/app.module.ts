import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule } from '@angular/material'
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductionLineSchematicComponent } from './production-line-schematic/production-line-schematic.component';
import { ContentsComponent } from './contents/contents.component';
import { ModifyDeleteComponent } from './modify-delete/modify-delete.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { PanSpaceComponent } from './pan-space/pan-space.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { HttpClientModule } from '@angular/common/http';
import { plsService } from './plsService';





@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductionLineSchematicComponent,
    ContentsComponent,
    ModifyDeleteComponent,
    LeftpanelComponent,
    PanSpaceComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    SubmenuComponent
  ],
  providers: [plsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
