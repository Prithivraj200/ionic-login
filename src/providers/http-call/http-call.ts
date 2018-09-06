import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpCallProvider implements HttpInterceptor{

  constructor(private loadCtrl:LoadingController){}

    intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
      let loader=this.loadCtrl.create({content:'Loading...'});
          loader.present();
      if(req.method=='POST' || req.method=='PUT'){
        const clonedReq=req.clone({
                          setHeaders:{'Content-Type':'application/json'}
                        });
        return next.handle(clonedReq).finally(()=>{loader.dismissAll();})
      }
      return next.handle(req).finally(()=>{loader.dismissAll();});
    }
}
