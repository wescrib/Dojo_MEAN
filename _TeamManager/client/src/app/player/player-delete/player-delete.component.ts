import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {

  private _playerService: PlayerService;
  private player: Player;

  constructor(_playerService: PlayerService) {
    this._playerService = _playerService;
    this.player = new Player();
   }

  ngOnInit() {
  }

  deletePlayer(id: string){
    var conf = confirm("Are youo sure you want to delete " + this.player + "?");
    if(conf == true){
      console.log("player-delete subcomponent>>deleting " + this.player.json())
      this._playerService.delete(req.params.id).subscribe(
        player => player.json(),
        error => console.log(error)
      )
    }else{
      console.log("Player was not deleted");
    }
  }
}
