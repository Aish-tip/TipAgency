import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open10(){
    document.getElementById("div10").style.display="block";
    document.getElementById("ex-img10").style.display="none";
    document.getElementById("ex-img11").style.display="none";
    document.getElementById("ex-img12").style.display="none";
    document.getElementById("img-name10").style.display="none";
    document.getElementById("img-name11").style.display="none";
    document.getElementById("img-name12").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("kandavara").style.backgroundColor="#f6f6f6";
    document.getElementById("kandavara").style.maxWidth="100%";
    document.getElementById("kandavara").style.flex="0 0 100%";
  }
  open11(){
    document.getElementById("div11").style.display="block";
    document.getElementById("ex-img10").style.display="none";
    document.getElementById("ex-img11").style.display="none";
    document.getElementById("ex-img12").style.display="none";
    document.getElementById("img-name10").style.display="none";
    document.getElementById("img-name11").style.display="none";
    document.getElementById("img-name12").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("sarayu").style.backgroundColor="#f6f6f6";
    document.getElementById("sarayu").style.maxWidth="100%";
    document.getElementById("sarayu").style.flex="0 0 100%";
  }
  
  open12(){
    document.getElementById("div12").style.display="block";
    document.getElementById("ex-img10").style.display="none";
    document.getElementById("ex-img11").style.display="none";
    document.getElementById("ex-img12").style.display="none";
    document.getElementById("img-name10").style.display="none";
    document.getElementById("img-name11").style.display="none";
    document.getElementById("img-name12").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("cf-holidays").style.backgroundColor="#f6f6f6";
    document.getElementById("cf-holidays").style.maxWidth="100%";
    document.getElementById("cf-holidays").style.flex="0 0 100%";
  }
  
    close(div){
      // alert(div);
        document.getElementById(div).style.display="none";
        document.getElementById("ex-img10").style.display="block";
        document.getElementById("ex-img11").style.display="block";
        document.getElementById("ex-img12").style.display="block";
        document.getElementById("kandavara").style.backgroundColor="#ffffff";
        document.getElementById("kandavara").style.maxWidth="33.33333%";
        document.getElementById("kandavara").style.flex="0 0 33.33333%";
        document.getElementById("sarayu").style.backgroundColor="#ffffff";
        document.getElementById("sarayu").style.maxWidth="33.33333%";
        document.getElementById("sarayu").style.flex="0 0 33.3333%";
        document.getElementById("cf-holidays").style.backgroundColor="#ffffff";
        document.getElementById("cf-holidays").style.maxWidth="33.3333%";
        document.getElementById("cf-holidays").style.flex="0 0 33.3333%";
        document.getElementById("img-name10").style.display="block";
        document.getElementById("img-name11").style.display="block";
        document.getElementById("img-name12").style.display="block";
  
    }

}
