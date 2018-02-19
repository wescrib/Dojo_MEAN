import { Component, OnInit } from '@angular/core';
import { User } from '../server/models/user';
import { Http } from '@angular/http';
import { UserService } from '../server/controllers/user.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _userService: UserService
  private _http: Http
  currentUser: User = null;
  private _router: Router


  constructor(_router:Router,_userService: UserService, _http: Http) { 
    this._userService = _userService;
    this._http = _http;
    this._router = _router;
    // this.currentUser = null
  }

  ngOnInit() {
    this.inSession()

  }

  inSession(){
    this._userService.getUser().subscribe(
      res => {
        console.log(res.json(),"LOGGED IN");
        this.currentUser = res.json();
        console.log(this.currentUser)
        if(this.currentUser._id == null) {
          this._router.navigateByUrl("/")
        }
      }
    )
  }

  logout(){
    this._userService.logout().subscribe(res => {this.currentUser = null})
    this._router.navigateByUrl("/");
  }

}
