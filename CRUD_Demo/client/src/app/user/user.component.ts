import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    // new User( 1,"First", "Last","email@email.com"),
    // new User( 2,"First", "Last","email@email.com"),
    // new User( 3,"First", "Last","email@email.com"),
  ];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  //sending new users to array list of users
  create(user: User){
    this._userService.create(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
    
    this.users.push(user);
  }

  destroy(user: User){
    console.log("DELETING " + user);
    this._userService.destroy(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err))
  }

  update(user: User){
    console.log("UPDATING " + user);
    this._userService.update(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err))
  }
  /*********************** ABOVE WAS WRITTEN IN ANGULAR ***************/

  getUsers(){
    this._userService.getUsers()
    .then(users => this.users = users)
    .catch(err => console.log(err));
  }

}
