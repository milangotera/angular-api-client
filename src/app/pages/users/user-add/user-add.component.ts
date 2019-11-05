import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ApiService } from '../../../services/api.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  btn: any = {
    guardar: 'Guardar',
  };

  userForm: FormGroup;

  load: boolean = false;

  constructor(
    private titleService:Title,
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.titleService.setTitle("Agregar un usuario");
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
    });
  }

  userCreate(data) {
    this.load = true;
    this.btn.guardar = 'Espere...';
    this.api.userCreate(data).then(response => {
      this.btn.guardar = 'Guardar';
      this.load = false;
      let res: any = response;
      if(res.status === 201){
        this.router.navigate(['/users/list']);
      }
    });
  }

}
