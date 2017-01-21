import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartStateComponent } from './start-state/start-state.component';
import { LobbyStateComponent } from './lobby-state/lobby-state.component';
import { AppRoutes } from './app.routes';
import { GameStateComponent } from './game-state/game-state.component';
import { RoomStateComponent } from './room-state/room-state.component';
import { JoinStateComponent } from './join-state/join-state.component';
import { MenuStateComponent } from './menu-state/menu-state.component';

@NgModule({
  declarations: [
    AppComponent,
    StartStateComponent,
    LobbyStateComponent,
    GameStateComponent,
    RoomStateComponent,
    JoinStateComponent,
    MenuStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
