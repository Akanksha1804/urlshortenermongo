import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { reguser } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private userService:UserService, private router : Router) { 
    this.registerForm = new FormGroup({
      rname : new FormControl("",Validators.required),
      remail : new FormControl("",Validators.required),
      rpw : new FormControl("",Validators.required),
      rcpw : new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
  }

  saveUser(){
    console.log(this.registerForm.value);
    this.userService.saveUser(this.registerForm.value).subscribe((data:any)=>{
      console.log(data)
      console.log("registered successfully")
      this.router.navigate(['/login']);
    },(err:any)=>{
      console.log(err)
    })
  }

}
