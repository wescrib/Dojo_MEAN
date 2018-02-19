import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';

@Injectable()
export class UserService {

  currentUser: User = null;

  constructor(private _http: Http) { 

}

  create(newUser: User){
    console.log("sending new user info to backend ", newUser);
    return this._http.post("/users/create", newUser);
  }

  login(user,cb){
    console.log("sending login info to backend");
    this._http.post("/users/login",user).subscribe(
      res =>cb(res.json()),
      err => cb(err.json())
    )
  }

  getUser(){
    console.log("CHECKING IF USER IS LOGGED IN")
    return this._http.get("/session");
  }

  logout(){
    return this._http.delete("/logout")
  }



}