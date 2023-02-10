import { SignupRequestModel } from "src/app/shared/models/request/signup-request.model";

export class SignupViewModel {
    email : string;
    password : string;
    address : string;
    address2 : string;
    city : string;
    state : string;
    zip : string;

    constructor(email : string,
        password : string,
        address : string,
        address2 : string,
        city : string,
        state : string,
        zip : string,
        )
    {
        this.email = email;
        this.password = password;
        this.address = address;
        this.address2 = address2
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    getRequestModel()
    {
        let requestModel : SignupRequestModel = {
            password: this.password,
            address: this.address,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zip: this.zip
        }

        return requestModel;
    }
}