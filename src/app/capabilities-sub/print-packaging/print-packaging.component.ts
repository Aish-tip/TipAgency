import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-packaging',
  templateUrl: './print-packaging.component.html',
  styleUrls: ['./print-packaging.component.css']
})
export class PrintPackagingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open1(){
    document.getElementById("div1").style.display="block";
    document.getElementById("ex-img1").style.display="none";
    document.getElementById("ex-img2").style.display="none";
    document.getElementById("ex-img3").style.display="none";
    document.getElementById("img-name1").style.display="none";
    document.getElementById("img-name2").style.display="none";
    document.getElementById("img-name3").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("hudabar").style.backgroundColor="#f6f6f6";
    document.getElementById("hudabar").style.maxWidth="100%";
    document.getElementById("hudabar").style.flex="0 0 100%";
  }
  open2(){
    document.getElementById("div2").style.display="block";
    document.getElementById("ex-img1").style.display="none";
    document.getElementById("ex-img2").style.display="none";
    document.getElementById("ex-img3").style.display="none";
    document.getElementById("img-name1").style.display="none";
    document.getElementById("img-name2").style.display="none";
    document.getElementById("img-name3").style.display="none";
    document.getElementById("title").style.display="none";
    document.getElementById("savyasachi").style.backgroundColor="#f6f6f6";
    document.getElementById("savyasachi").style.maxWidth="100%";
    document.getElementById("savyasachi").style.flex="0 0 100%";
  }
  
  // open3(){
  //   document.getElementById("div3").style.display="block";
  //   document.getElementById("ex-img1").style.display="none";
  //   document.getElementById("ex-img2").style.display="none";
  //   document.getElementById("ex-img3").style.display="none";
  //   document.getElementById("img-name1").style.display="none";
  //   document.getElementById("img-name2").style.display="none";
  //   document.getElementById("img-name3").style.display="none";
  //   document.getElementById("title").style.display="none";
  //   document.getElementById("lakeview").style.backgroundColor="#f6f6f6";
  //   document.getElementById("lakeview").style.maxWidth="100%";
  //   document.getElementById("lakeview").style.flex="0 0 100%";
  // }
  
    close(div){
      // alert(div);
        document.getElementById(div).style.display="none";
        document.getElementById("ex-img1").style.display="block";
        document.getElementById("ex-img2").style.display="block";
        document.getElementById("ex-img3").style.display="block";
        document.getElementById("hudabar").style.backgroundColor="#ffffff";
        document.getElementById("hudabar").style.maxWidth="33.33333%";
        document.getElementById("hudabar").style.flex="0 0 33.33333%";
        document.getElementById("savyasachi").style.backgroundColor="#ffffff";
        document.getElementById("savyasachi").style.maxWidth="33.33333%";
        document.getElementById("savyasachi").style.flex="0 0 33.3333%";
        // document.getElementById("lakeview").style.backgroundColor="#ffffff";
        // document.getElementById("lakeview").style.maxWidth="33.3333%";
        // document.getElementById("lakeview").style.flex="0 0 33.3333%";
        document.getElementById("img-name1").style.display="block";
        document.getElementById("img-name2").style.display="block";
        document.getElementById("img-name3").style.display="block";
  
    }
  
}
