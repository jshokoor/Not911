import { Component } from '@angular/core';
import { PbAuthService } from './services/pb-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  agency = '';
  phone = '';
  phoneWithStringConcatenationForCallFunctionToWork = 'tel:+1-';

  constructor(public pbAuth: PbAuthService){
    
    var self = this;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        
        self.pbAuth.callOut().subscribe(access => {
          
          self.pbAuth.get911( (access as any).access_token,position.coords.latitude, position.coords.longitude).subscribe(data => {
            self.agency = data.agency;
            self.phone = data.phone;
            self.phoneWithStringConcatenationForCallFunctionToWork = self.phoneWithStringConcatenationForCallFunctionToWork + data.phone;
          });
      
        });
      });
  } else {
      alert( "Geolocation is not supported by this browser.");
  }   
  }
  
}
