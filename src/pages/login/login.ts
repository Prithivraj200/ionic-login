import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { User } from './../../modal/type';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  isAuthenticated:boolean=true;

  constructor(private navCtrl: NavController,
              private api:ApiProvider) { }

  submit(f:NgForm) {
    const value=f.value;
    this.api.checkUser(value).subscribe((data:Array<User>)=>{
      console.log(data);
      if(data.length){
        this.isAuthenticated=true;
        this.navCtrl.push(HomePage);
      }
      else
        this.isAuthenticated=false; 
    },err=>{
      this.isAuthenticated=false;
      console.log(err);
    });        
  }

}
