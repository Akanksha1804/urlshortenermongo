import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlList : Array<url> = []

  constructor(private userService : UserService, private router : Router) { 
    this.userService.getUrls().subscribe((data : any) =>{
      console.log(data);
      this.urlList = data;
    })
  }

  ngOnInit(): void {
  }

  updateClicks( obj : url){
    obj.clicks = obj.clicks+1
    this.userService.updateClicks(obj._id,obj).subscribe(()=>{
      console.log("updated")
      this.userService.getUrls().subscribe(()=>{
        console.log("urllist")
        window.location.href = obj.longurl;
      })
    })
  }

}
