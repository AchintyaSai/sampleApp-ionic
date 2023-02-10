import { environment } from "src/environments/environment"

const baseUrl = environment.baseUrl;
const AUTHENTICATION = {
    LOGIN : baseUrl+"/login",
    SIGNUP : baseUrl + "/signup"
}

export const APIUrl = Object.freeze({
  AUTHENTICATION  
})