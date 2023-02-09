import { Injectable } from '@angular/core';
import { LoginViewModel } from 'src/app/login/view-models/login-view.model';
import { APIUrl } from 'src/app/shared/constants/api-url-constants';
import { APIMethod } from 'src/app/shared/constants/app-constants';
import { LoginRequestModel } from 'src/app/shared/models/request/login-request.model';
import { LoginResponseModel } from 'src/app/shared/models/response/login-response.model';
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
}
