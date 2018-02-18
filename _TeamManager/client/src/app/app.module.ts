import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayerComponent } from './player/player.component';
import { AddplayerComponent } from './player/addplayer/addplayer.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerService } from './player/player.service';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AddplayerComponent,
    PlayerListComponent,
    PlayerDeleteComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
