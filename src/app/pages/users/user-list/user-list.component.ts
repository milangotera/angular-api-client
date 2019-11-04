import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = [];

  constructor(
    private titleService:Title,
    private api: ApiService
  ){
    this.titleService.setTitle("Lista de usuarios");
  }

  ngOnInit() {
    this.userList();
  }

  userList(){
    this.api.userList().subscribe(response => {
      this.users = response;
    });
  }

}
