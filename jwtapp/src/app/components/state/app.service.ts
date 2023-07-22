import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import *as env  from "../../../environments/environment.development";


@Injectable()
export class appService{
    constructor(private http:HttpClient){}

    loadProfile(){
        return this.http.get(env.environment.url+"/api/profile",{
            withCredentials:true
        })
    }

    loadUsers(){
        return this.http.get(env.environment.url+"/api/admin/users",{
            withCredentials:true
        });
    }
}