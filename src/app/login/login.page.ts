import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../core/services/authentication.service';
import { LocaldbService } from '../core/services/localdb.service';
import { LoginViewModel } from './view-models/login-view.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginViewModel : LoginViewModel;
  constructor(private authService : AuthenticationService, private toastController : ToastController, private router : Router, private localDb : LocaldbService) { 
    this.loginViewModel = new LoginViewModel("","");
  }

  ngOnInit() {
  }

  sendLoginDetails()
  {
    if(environment.isLocal)
    {
      let signupDetails = this.localDb.getFromLocalStorage("signupDetails");
      if(signupDetails)
      {
        if(signupDetails.username != this.loginViewModel.userName)
        {
          this.presentToast("User details not found.")
        }
        else{
          if(signupDetails.password != this.loginViewModel.password)
            this.presentToast("Incorrect Password");
          else
            this.router.navigateByUrl("posts")
        }
      }
      else
      {
        this.presentToast("User details not found.")
      }

    }
    else
    {
      this.authService.getLoginDetails(this.loginViewModel).subscribe((resp : any) => {
        this.loginViewModel = new LoginViewModel(undefined,undefined,resp);
        this.presentToast();
      })
    }
  }

  navigateToSignup()
  {
    this.router.navigateByUrl('signup');
  }

  async presentToast(statusMessage = this.loginViewModel.statusMessage) {
    const toast = await this.toastController.create({
      message: statusMessage ,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }
}