import { environment } from "src/environments/environment"

const baseUrl = environment.baseUrl;
const AUTHENTICATION = {
    LOGIN : baseUrl+"/login"
}

export const APIUrl = Object.freeze({
  AUTHENTICATION  
})