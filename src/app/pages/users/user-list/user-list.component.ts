import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = [];

  constructor(
    private titleService:Title,
    private api: ApiService,
    private router: Router
  ){
    this.titleService.setTitle("Lista de usuarios");
  }

  ngOnInit() {
    this.userList();
  }

  userList(){
    this.api.userList().then(response => {
      let res: any = response;
      if(res.status === 200){
        this.users = res.body;
      }
    });
  }

  userShow(id){
    this.router.navigate([`/users/${id}`]);
  }

  userDelete(id){
    this.api.userDelete(id).then(response => {
      let res: any = response;
      if(res.status === 200){
        
      }
      this.userList();
    });
  }

}
