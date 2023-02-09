import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../core/services/authentication.service';
import { LoginResponseModel } from '../shared/models/response/login-response.model';
import { LoginViewModel } from './view-models/login-view.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginViewModel : LoginViewModel;
  constructor(private authService : AuthenticationService, private toastController : ToastController) { 
    this.loginViewModel = new LoginViewModel("","");
  }

  ngOnInit() {
    
  }

  sendLoginDetails()
  {
    console.log(this.loginViewModel)
    this.authService.getLoginDetails(this.loginViewModel).subscribe((resp : LoginResponseModel) => {
      this.loginViewModel = new LoginViewModel(undefined,undefined,resp);
      this.presentToast('bottom');
    })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: this.loginViewModel.statusMessage,
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
