import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  productList:Array<any>;

  constructor(private navCtrl: NavController,
              private apiCall:ApiProvider) { }

  ngOnInit() {
    this.apiCall.getProduct().subscribe((data:Array<any>)=>{
      this.productList=data;
    },err=>{console.log(err)});
  }

}
