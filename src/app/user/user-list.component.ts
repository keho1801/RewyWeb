import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
 
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 
  users={};
 
  constructor(private userService: UserService) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      console.log(data);
      
    });
  }
}