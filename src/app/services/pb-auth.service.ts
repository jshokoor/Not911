import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PbAuthService {

  constructor(private http: HttpClient) {}

  

  callOut():Observable<any>{
    var key = "V0nScPnwSaoReSg6bBZv599wwGSwGFot";
    /** First Key 
     * hJ8TXR8pwERG92SEq6EZBTn4818AcFbe
    */
    /** Second Key
     * V0nScPnwSaoReSg6bBZv599wwGSwGFot
     */
    var secret = "BdYJ4xgAWHjvF1uz";
    /** First Secret 
     * YGPm7mAMY9ewDzwv
    */
    /** Second Secret
     * BdYJ4xgAWHjvF1uz
     */

    var encodedData = window.btoa(`${key}:${secret}`); // encode a string
    var self = this;
    
    return self.http.post('https://api.pitneybowes.com/oauth/token', "grant_type=client_credentials", {
      headers: new HttpHeaders().set('Authorization', `Basic ${encodedData}`)
      .set("Content-Type","application/x-www-form-urlencoded"),
    });

  }

  get911(token:string,lat:any,long:any):Observable<Geo911Model>{
    var self = this;
    var h = new HttpHeaders();
    h.set('Authorization', `Bearer ${token}`);
    h.set('Content-Type','application/json');
    return this.http.get<Geo911Model>(`https://api.pitneybowes.com/location-intelligence/geo911/v1/psap/bylocation?latitude=${lat}&longitude=${long}`,
    { headers:new HttpHeaders().set('Authorization', `Bearer ${token}`)}
    );
  }

}


export class Geo911Model {
  agency:string;
  phone:string;
}
