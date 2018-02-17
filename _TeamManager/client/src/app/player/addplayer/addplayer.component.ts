import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  private _playerService: PlayerService;
  private player: Player;

  constructor(
    _playerService:PlayerService
  ) { 
    this._playerService = _playerService;
    this.player = new Player();
  }

  ngOnInit() {
  }
  createPlayer(){
    var h = confirm("Are you sure you want to make " + this.player.name + " a player?");
    if(h == true){
      this._playerService.create(this.player).subscribe(
        player => player.json(),
        error => console.log(error)
      )
    } else {
      console.log("did nothing");
    }
  }

}
