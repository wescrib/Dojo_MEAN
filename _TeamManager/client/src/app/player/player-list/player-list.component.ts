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

  deletePlayer(id: string){
    var conf = confirm("Are you sure you want to delete this player?");
    if(conf == true){
      console.log("player-delete subcomponent>>deleting a player")
      this._playerService.delete(id).subscribe(
        res => res.json()
        // error => console.log(error)
      )
      location.reload()
    }else{
      console.log("Player was not deleted");
    }
    
  }

}
