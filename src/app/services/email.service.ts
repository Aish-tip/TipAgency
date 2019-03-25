import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://tipagency.gcproductions.in/assets/email_form.php';

  constructor(private http: Http) { }

  sendEmail(data): Observable<any> {
    alert("service");
    return this.http.post(this.emailUrl, data)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}
