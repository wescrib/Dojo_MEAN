import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { User } from '../../server/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  private _userService: UserService;
  private user: User;
  private _router: Router
  errors: string[] = []
  private test: any;

  constructor(
    _userService: UserService,
    _router: Router,
  ) {
    this._userService = _userService;
    this.user = new User()
    this._router = _router;

  }

  ngOnInit() {
    // this.test = {"name" : "will"}
  }

  registerUser(){
    console.log("hit sub service",this.user)
    this._userService.create(this.user).subscribe(
      res => this._router.navigateByUrl("/dashboard"),
      error => console.log(error)
    )
  }

}
