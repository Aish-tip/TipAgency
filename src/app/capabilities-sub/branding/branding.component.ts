import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // $(document).ready(function(){

    //   $(".example1").click(function(){
    //     $("#ex-img2, #ex-img3").hide();
    //     $("#ex-img1").css("display","none");
    //     $(".example1").css({"width":"100%","background-color":"#f6f6f6"});
    //     $('#savyasachi').css({"max-width":"100%","flex":"0 0 100%"});
    //     $(".img-name1,.img-name2,.img-name3").css("display","none");
    //     // $(".div1").css("display","block");
    //     document.getElementById("div1").style.display="block";
    //   });

    //   $(".example2").click(function(){
    //     $("#ex-img1, #ex-img3").hide();
    //     $("#ex-img2").css("display","none");
    //     $(".example2").css({"width":"100%","background-color":"#f6f6f6"});
    //     $('#hudabar').css({"max-width":"100%","flex":"0 0 100%"});
    //     $(".img-name1,.img-name2,.img-name3").css("display","none");
    //     $(".div2").css("display","block");
    //   });

    //     $(".example3").click(function(){
    //     $("#ex-img1, #ex-img2").hide();
    //     $("#ex-img3").css("display","none");
    //     $(".example3").css({"width":"100%","background-color":"#f6f6f6"});
    //     $('#lakeview').css({"max-width":"100%","flex":"0 0 100%"});
    //     $(".img-name1,.img-name2,.img-name3").css("display","none");
    //     $(".div3").css("display","block");
    //   });  

      // $("button").click(function(){
      //   // alert("hello");
      //   // $("#div1").css("display","none");
      //   document.getElementById("div1").style.display="none";
      // });

    // });
    


  
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
  document.getElementById("savyasachi").style.backgroundColor="#f6f6f6";
  document.getElementById("savyasachi").style.maxWidth="100%";
  document.getElementById("savyasachi").style.flex="0 0 100%";
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
  document.getElementById("hudabar").style.backgroundColor="#f6f6f6";
  document.getElementById("hudabar").style.maxWidth="100%";
  document.getElementById("hudabar").style.flex="0 0 100%";
}

open3(){
  document.getElementById("div3").style.display="block";
  document.getElementById("ex-img1").style.display="none";
  document.getElementById("ex-img2").style.display="none";
  document.getElementById("ex-img3").style.display="none";
  document.getElementById("img-name1").style.display="none";
  document.getElementById("img-name2").style.display="none";
  document.getElementById("img-name3").style.display="none";
  document.getElementById("title").style.display="none";
  document.getElementById("lakeview").style.backgroundColor="#f6f6f6";
  document.getElementById("lakeview").style.maxWidth="100%";
  document.getElementById("lakeview").style.flex="0 0 100%";
}

  close(div){
    // alert(div);
      document.getElementById(div).style.display="none";
      document.getElementById("ex-img1").style.display="block";
      document.getElementById("ex-img2").style.display="block";
      document.getElementById("ex-img3").style.display="block";
      document.getElementById("savyasachi").style.backgroundColor="#ffffff";
      document.getElementById("savyasachi").style.maxWidth="33.33333%";
      document.getElementById("savyasachi").style.flex="0 0 33.33333%";
      document.getElementById("hudabar").style.backgroundColor="#ffffff";
      document.getElementById("hudabar").style.maxWidth="33.33333%";
      document.getElementById("hudabar").style.flex="0 0 33.3333%";
      document.getElementById("lakeview").style.backgroundColor="#ffffff";
      document.getElementById("lakeview").style.maxWidth="33.3333%";
      document.getElementById("lakeview").style.flex="0 0 33.3333%";
      document.getElementById("img-name1").style.display="block";
      document.getElementById("img-name2").style.display="block";
      document.getElementById("img-name3").style.display="block";

  }

}
