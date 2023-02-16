import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { APIMethod } from 'src/app/shared/constants/app-constants';
import { environment } from 'src/environments/environment';
import { LocaldbService } from './localdb.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient : HttpClient, private localDbService : LocaldbService) { }


  public call<Resp>(url : string, apiMethod : APIMethod) : Observable<Resp>;
  public call<Resp>(url : string, apiMethod : APIMethod, params : Map<string, string>) : Observable<Resp>;
  public call<Req,Resp>(url : string, apiMethod : APIMethod, params : Map<string, string>, body : Req) : Observable<Resp>;

  public call<Req,Resp>(url : string, apiMethod : APIMethod, params? : Map<string,string>, body? : Req) : Observable<Resp>
  {
    switch(apiMethod){
      case APIMethod.GET:
        return this.get<Resp>(url);
        break;
      case APIMethod.POST:
        return this.post<Req,Resp>(url, body);
        break;
      case APIMethod.PUT: 
        return this.put<Req,Resp>(url, body)
        break;
      case APIMethod.DELETE:
        return this.delete<Resp>(url)
        break;
    }
  }
  private get<Resp>(url: string): Observable<Resp> {
    return this.httpClient.get<Resp>(url);
  }
  private post<Req,Resp>(url: string, body? : Req): Observable<Resp> {
    return this.httpClient.post<Resp>(url,body);
  }
  private put<Req,Resp>(url: string, body? : Req): Observable<Resp> {
    return this.httpClient.put<Resp>(url, body);
  }
  private delete<Resp>(url: string): Observable<Resp> {
    return this.httpClient.delete<Resp>(url);
  }
}
