import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(
    private _http: Http
  ) { }

  create(newPlayer: Player){
    return this._http.post("/create", newPlayer)
  }

  all(){
    return this._http.get("/display")
  }
  delete(id: string){
    return this._http.delete("/remove/" + id)
  }
  update(player){
    return this._http.put("/update/"+player._id, player);
  }

}
