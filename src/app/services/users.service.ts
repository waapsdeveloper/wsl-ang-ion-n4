import { Injectable } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _user: any;

  constructor(private nav: NavService, private network: NetworkService) { }

  login(data: any){
    return new Promise( async resolve => {
      const res = await this.network.login(data)
      console.log(res)

      if(res.user && res.token){
        if(res.user){
          let str = JSON.stringify(res.user);
          localStorage.setItem("user", str)
        }

        if(res.token){
          localStorage.setItem("token", res.token)
        }
        resolve(res.user)
      } else {
        resolve(null)
      }



    })
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    this.nav.navigateTo('login')
  }

  getUser() {
    if (!this._user) {
      const res = localStorage.getItem("user");
      if (res) {
        this._user = JSON.parse(res);
      }
    }
    return this._user;
  }

  setUser(user: any) {
    // if(!user.image){
    //   user.image = '/assets//svg/signup.svg'
    // }
    localStorage.setItem("user", JSON.stringify(user));
    this._user = user;
  }

  getUserRole() {

    const res = localStorage.getItem("user");
    if (res) {
      this._user = JSON.parse(res);

    }

    if (!this._user) {
      return -1;
    }

    if (!this._user.role_id) {
      return -1;
    }

    return this._user.role_id;
  }

  setTeacher(user: any) {

  }

  setStudent(user: any) {

  }

}
