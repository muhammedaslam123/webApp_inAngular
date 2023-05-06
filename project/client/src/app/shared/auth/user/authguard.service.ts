import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private auth:AuthServiceService,private router:Router) { }

  canActivate():boolean{
    if (this.auth.IsUserLoggedIn()) {
      return true
    }
    this.router.navigate(['']);
    return false;
  }
}
