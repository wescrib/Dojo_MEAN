import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public players: any;
  private _http: Http

  constructor(private _playerService: PlayerService, _http: Http) { }

  ngOnInit() {
    this._playerService.all().subscribe(
      players => this.players = players.json(),
      error => console.log(error)
    )
  }
  changeStatus(id: number, n: number){
    console.log(id+" " + n)
    let player = {_id: id, status: n }
    this._playerService.update(player).subscribe(
      res => this.ngOnInit(),
      error => console.log("UPDATE FAILED")
    )
    
  }

}
