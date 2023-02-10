import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { LoginViewModel } from 'src/app/login/view-models/login-view.model';
import { APIUrl } from 'src/app/shared/constants/api-url-constants';
import { APIMethod } from 'src/app/shared/constants/app-constants';
import { LoginRequestModel } from 'src/app/shared/models/request/login-request.model';
import { SignupRequestModel } from 'src/app/shared/models/request/signup-request.model';
import { LoginResponseModel } from 'src/app/shared/models/response/login-response.model';
import { SignupResponseModel } from 'src/app/shared/models/response/signup-response.model';
import { SignupViewModel } from 'src/app/signup/view-models/signupview.model';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private networkService : NetworkService) { }

  getLoginDetails(loginModel : LoginViewModel)
  {
    let apiUrl = APIUrl.AUTHENTICATION.LOGIN
    return this.networkService.call<LoginRequestModel, LoginResponseModel>(apiUrl,APIMethod.POST, new Map<string,string>(), loginModel.getRequestModel())
  }

  submitSignupDetails(signupModel : SignupViewModel)
  {
    let apiUrl = APIUrl.AUTHENTICATION.SIGNUP;
    return this.networkService.call<SignupRequestModel,SignupResponseModel>(apiUrl, APIMethod.POST, new Map<string,string>(), signupModel.getRequestModel())
  }
}
