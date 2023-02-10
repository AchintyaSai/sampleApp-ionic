import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../core/services/authentication.service';
import { LocaldbService } from '../core/services/localdb.service';
import { SignupViewModel } from './view-models/signupview.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupViewModel : SignupViewModel;
  constructor(private authService : AuthenticationService, private localDb : LocaldbService, private toastController : ToastController, private router : Router) {
    this.signupViewModel = new SignupViewModel("","","","","","","");
  }

  ngOnInit() {
  }

  submitDetails()
  {
    if(environment.isLocal)
    {
      if(this.localDb.getFromLocalStorage("signupDetails"))
        this.presentToast("This device is already signed up. Please login")
      else
      {
        this.localDb.putIntoLocalStorage("signupDetails", this.signupViewModel)
        this.presentToast("Successfully signed up. Please login");
        this.router.navigateByUrl("login")
      }
    }
    else
    {
      this.authService.submitSignupDetails(this.signupViewModel)
    }
  }

  async presentToast(statusMessage : string) {
    const toast = await this.toastController.create({
      message: statusMessage ,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }
}
