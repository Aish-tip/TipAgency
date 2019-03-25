import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open7(){
    document.getElementById("div7").style.display="block";
    document.getElementById("ex-img7").style.display="none";
    document.getElementById("ex-img8").style.display="none";
    document.getElementById("ex-img9").style.display="none";
    document.getElementById("img-name7").style.display="none";
    document.getElementById("img-name8").style.display="none";
    document.getElementById("img-name9").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("kingfisher").style.backgroundColor="#f6f6f6";
    document.getElementById("kingfisher").style.maxWidth="100%";
    document.getElementById("kingfisher").style.flex="0 0 100%";
  }
  // open8(){
  //   document.getElementById("div8").style.display="block";
  //   document.getElementById("ex-img7").style.display="none";
  //   document.getElementById("ex-img8").style.display="none";
  //   document.getElementById("ex-img9").style.display="none";
  //   document.getElementById("img-name7").style.display="none";
  //   document.getElementById("img-name8").style.display="none";
  //   document.getElementById("img-name9").style.display="none";
  //   document.getElementById("title").style.display="none";
  //   document.getElementById("credens").style.backgroundColor="#f6f6f6";
  //   document.getElementById("credens").style.maxWidth="100%";
  //   document.getElementById("credens").style.flex="0 0 100%";
  // }
  
  // open9(){
  //   document.getElementById("div9").style.display="block";
  //   document.getElementById("ex-img7").style.display="none";
  //   document.getElementById("ex-img8").style.display="none";
  //   document.getElementById("ex-img9").style.display="none";
  //   document.getElementById("img-name7").style.display="none";
  //   document.getElementById("img-name8").style.display="none";
  //   document.getElementById("img-name9").style.display="none";
  //   document.getElementById("title").style.display="none";
  //   document.getElementById("leeco").style.backgroundColor="#f6f6f6";
  //   document.getElementById("leeco").style.maxWidth="100%";
  //   document.getElementById("leeco").style.flex="0 0 100%";
  // }
  
    close(div){
      // alert(div);
        document.getElementById(div).style.display="none";
        document.getElementById("ex-img7").style.display="block";
        document.getElementById("ex-img8").style.display="block";
        document.getElementById("ex-img9").style.display="block";
        document.getElementById("kingfisher").style.backgroundColor="#ffffff";
        document.getElementById("kingfisher").style.maxWidth="33.33333%";
        document.getElementById("kingfisher").style.flex="0 0 33.33333%";
        // document.getElementById("credens").style.backgroundColor="#ffffff";
        // document.getElementById("credens").style.maxWidth="33.33333%";
        // document.getElementById("credens").style.flex="0 0 33.3333%";
        // document.getElementById("leeco").style.backgroundColor="#ffffff";
        // document.getElementById("leeco").style.maxWidth="33.3333%";
        // document.getElementById("leeco").style.flex="0 0 33.3333%";
        document.getElementById("img-name7").style.display="block";
        document.getElementById("img-name8").style.display="block";
        document.getElementById("img-name9").style.display="block";
  
    }

}
