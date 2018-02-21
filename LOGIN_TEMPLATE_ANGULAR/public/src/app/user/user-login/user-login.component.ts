import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { User } from '../../server/models/user';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms/src/model';
// import { Validators } from '@angular/forms/src/validators';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private _userService: UserService;
  private user: User;
  private _router: Router;
  errors: string[] = [];
  // private testForm: FormGroup;

  constructor(
    _userService: UserService,
    _router: Router,
    // testForm: FormGroup
  ) {
    this._userService = _userService;
    this.user = new User;
    this._router = _router;
    // this.testForm = testForm;

   }

  ngOnInit(){}
  // : void {
  //   this.testForm = new FormGroup({
  //     "lName": new FormControl(this.user.last_name,[
  //       Validators.required,
  //       Validators.minLength(2)
  //     ]),
  //   }
  // )}

  loginUser(){
    console.log("login info hit sub component",this.user)
    this._userService.login(this.user, (res) => {
      console.log(res);
      if(res.status){
        console.log("THIS IS AN ERROR MESSAGE: "+ res)
      }else {
        this._router.navigateByUrl("/dashboard");
      }
    }
  )}

  // inSession(){
  //   this._userService.getUser().subscribe(
  //     res => {
  //       console.log(res.json(),"LOGGED IN");
  //       this.user = res.json();
  //       console.log(this.user)
  //       if(this.user == null) {
  //         this._router.navigateByUrl("/")
  //       }
  //     }
  //   )
  // }

}
