import { Injectable } from "@angular/core";
import  {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class UserService {

    url = environment.apiUrl;
    constructor(private httpClient:HttpClient){ }

    signUp(data:any){
      console.log("on entre ici")
        return this.httpClient.post("http://192.168.93.62:3000/user/signup/", data,{
            headers: new HttpHeaders().set('Content-type', "application/json")
            
        })
    }
    forgotPassword(data:any){
        return this.httpClient.post("http://192.168.93.62:3000/user/forgotPassword/",data,{
            headers:new HttpHeaders().set('Content-Type', "application/json")
        })
    }

    login(data:any){
        return this.httpClient.post("http://192.168.93.62:3000/user/login/",data,{
            headers:new HttpHeaders().set('Content-Type', "application/json")
        })
    }
}