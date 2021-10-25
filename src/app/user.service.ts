import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loguser, reguser, url } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  saveUser(data : reguser){
    return this.http.post("https://pleaseexecute.herokuapp.com/registeruser",data);
  }

  loginSave(data : loguser){
    return this.http.post("https://pleaseexecute.herokuapp.com/loginuser",data);
  }

  saveUrl(data : url){
    return this.http.post("https://pleaseexecute.herokuapp.com/saveurl",data);
  }

  getUrls(){
    return this.http.get("https://pleaseexecute.herokuapp.com/urllist");
  }

  updateClicks(id : any, data : url){
    console.log(id)
    console.log(data)
    return this.http.put(`https://pleaseexecute.herokuapp.com/clicks/${id}`,data);
  }
}
