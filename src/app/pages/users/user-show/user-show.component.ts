import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ApiService } from '../../../services/api.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  btn: any = {
    guardar: 'Guardar',
  };

  userForm: FormGroup;

  load: boolean = false;

  constructor(
    private titleService:Title,
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.titleService.setTitle("Agregar un usuario");
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'id' : [null, Validators.required],
    });
    this.userShow(this.activatedRoute.snapshot.paramMap.get("id"));
  }

  userShow(id) {
    this.load = true;
    this.btn.guardar = 'Espere...';
    this.api.userShow(id).then(response => {
      this.btn.guardar = 'Guardar';
      this.load = false;
      let res: any = response;
      if(res.status === 200){
        this.userForm.controls['name'].setValue(res.body[0].name);
        this.userForm.controls['email'].setValue(res.body[0].email);
        this.userForm.controls['id'].setValue(res.body[0].id);
      }else{
        this.router.navigate(['/users/list']);
      }
    });
  }

  userUpdate(userForm) {
    this.load = true;
    this.btn.guardar = 'Espere...';
    this.api.userUpdate(userForm).then(response => {
      this.btn.guardar = 'Guardar';
      this.load = false;
      let res: any = response;
      if(res.status === 200){
        this.router.navigate(['/users/list']);
      }
    });
  }

}
