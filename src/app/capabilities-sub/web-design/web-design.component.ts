import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})
export class WebDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open4(){
    document.getElementById("div4").style.display="block";
    document.getElementById("ex-img4").style.display="none";
    document.getElementById("ex-img5").style.display="none";
    document.getElementById("ex-img6").style.display="none";
    document.getElementById("img-name4").style.display="none";
    document.getElementById("img-name5").style.display="none";
    document.getElementById("img-name6").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("akshara").style.backgroundColor="#f6f6f6";
    document.getElementById("akshara").style.maxWidth="100%";
    document.getElementById("akshara").style.flex="0 0 100%";
  }
  open5(){
    document.getElementById("div5").style.display="block";
    document.getElementById("ex-img4").style.display="none";
    document.getElementById("ex-img5").style.display="none";
    document.getElementById("ex-img6").style.display="none";
    document.getElementById("img-name4").style.display="none";
    document.getElementById("img-name5").style.display="none";
    document.getElementById("img-name6").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("hos").style.backgroundColor="#f6f6f6";
    document.getElementById("hos").style.maxWidth="100%";
    document.getElementById("hos").style.flex="0 0 100%";
  }
  
  open6(){
    document.getElementById("div6").style.display="block";
    document.getElementById("ex-img4").style.display="none";
    document.getElementById("ex-img5").style.display="none";
    document.getElementById("ex-img6").style.display="none";
    document.getElementById("img-name4").style.display="none";
    document.getElementById("img-name5").style.display="none";
    document.getElementById("img-name6").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("seven").style.backgroundColor="#f6f6f6";
    document.getElementById("seven").style.maxWidth="100%";
    document.getElementById("seven").style.flex="0 0 100%";
  }
  
    close(div){
      // alert(div);
        document.getElementById(div).style.display="none";
        document.getElementById("ex-img4").style.display="block";
        document.getElementById("ex-img5").style.display="block";
        document.getElementById("ex-img6").style.display="block";
        document.getElementById("akshara").style.backgroundColor="#ffffff";
        document.getElementById("akshara").style.maxWidth="33.33333%";
        document.getElementById("akshara").style.flex="0 0 33.33333%";
        document.getElementById("hos").style.backgroundColor="#ffffff";
        document.getElementById("hos").style.maxWidth="33.33333%";
        document.getElementById("hos").style.flex="0 0 33.3333%";
        document.getElementById("seven").style.backgroundColor="#ffffff";
        document.getElementById("seven").style.maxWidth="33.3333%";
        document.getElementById("seven").style.flex="0 0 33.3333%";
        document.getElementById("img-name4").style.display="block";
        document.getElementById("img-name5").style.display="block";
        document.getElementById("img-name6").style.display="block";
  
    }
  

}
