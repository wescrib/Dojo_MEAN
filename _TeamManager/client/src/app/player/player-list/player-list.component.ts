import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  public players: any;

  constructor(
    private _playerService: PlayerService
  ) {  }

  ngOnInit() {
    this._playerService.all().subscribe(
      players => this.players = players.json(),
      error => console.log(error)
    )
  }


}
