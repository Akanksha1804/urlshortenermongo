import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { url } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  urlForm : FormGroup;

  constructor(private userService : UserService, private router : Router) { 
    this.urlForm = new FormGroup({
      'longurl' : new FormControl("",Validators.required)
    })
  }

  generate(length : number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }

  ngOnInit(): void {
  }

  createUrl(){

    if(this.urlForm.valid){
      let short = this.generate(4);

      let obj : url = {
        shorturl : "",
        longurl : "",
        clicks : 0
      };
      obj.shorturl = short
      console.log(this.urlForm.value)
      obj.longurl = this.urlForm.value.longurl
      obj.clicks = 0
      console.log(obj)
      this.userService.saveUrl(obj).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/home']);
      })
    }
    
  }

}
