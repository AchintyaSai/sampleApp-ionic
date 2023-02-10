import { LoginRequestModel } from "src/app/shared/models/request/login-request.model";
import { LoginResponseModel } from "src/app/shared/models/response/login-response.model";

export class LoginViewModel {
    userName: string = "";
    password: string = "";
    statusMessage: string = "";

    constructor(userName?: string, password?: string) 
    constructor(userName?: string, password?: string, responseModel?: LoginResponseModel);

    constructor(userName? : string, password? : string, responseModel?: LoginResponseModel){
        if (responseModel)
            this.convertToViewModel(responseModel);
        else {
            this.userName = userName ? userName : "";
            this.password = password ? password : "";
        }
    }

    getRequestModel() {
        let requestModel: LoginRequestModel = {
            username: this.userName,
            password: this.password
        };

        return requestModel;
    }

    convertToViewModel(responseModel: LoginResponseModel) {
        this.userName = responseModel.userName;
        this.password = responseModel.password;
        this.statusMessage = responseModel.statusMessage;
    }
}
