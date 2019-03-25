import { Component, OnInit } from '@angular/core';
import '../../../../node_modules/rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormControl, FormGroup} from '@angular/forms';
import {EmailService} from '../../services/email.service';
declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private mailservice : EmailService
  ) { }
    contactForm = new FormGroup({
      name: new FormControl(),
    email: new FormControl(),
    subject : new FormControl(),
    message : new FormControl()
});
  ngOnInit() {
    $(document).ready(function(){ 
      $(window).scroll(function(){ 
          if ($(this).scrollTop() > 170) { 
              $('#scroll').fadeIn(); 
          } else { 
              $('#scroll').fadeOut(); 
          } 
      }); 
      $('#scroll').click(function(){ 
          $("html, body").animate({ scrollTop: 0 }, 900); 
          return false; 
      }); 
  });
  }

  submitForm(data) { console.log(data);
    alert("form");
    this.mailservice.sendEmail(data)
      .subscribe(res => {
        console.log("Mail sent", res);
      }, error => {
        console.log("Failed",error);
      });
  }

}
