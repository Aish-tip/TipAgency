import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  constructor() { }

  public ngOnInit() {

    $(document).ready(function(){

      $("#image-dev").click(function(){
        $("#image-content,#image-hr,#image-gd,#image-sm,#image-seo,#image-acc,#image-bus,#image-digital").hide();
        $('#image-dev').css("display","none");
        $('#developer_id').css({"max-width":"100%","flex":"0 0 100%"});
        $('.developer').css({"width":"100%","background-color":"#f6f6f6"});
        $(".div1").css("display","block");  
      });

      $("#image-content").click(function(){
        $("#image-dev,#image-hr,#image-gd,#image-sm,#image-seo,#image-acc,#image-bus,#image-digital").hide();
        $('#image-content').css("display","none");
        $('#content-writer_id').css({"max-width":"100%","flex":"0 0 100%"});
        $('.content-writer').css({"width":"100%","background-color":"#f6f6f6"});
        $(".div2").css("display","block");
      });

      $("#image-hr").click(function(){
        $("#image-content,#image-dev,#image-gd,#image-sm,#image-seo,#image-acc,#image-bus,#image-digital").hide();
        $('#image-hr').css("display","none");
        $('#human-resource_id').css({"max-width":"100%","flex":"0 0 100%"});
        $('.human-resource').css({"width":"100%","background-color":"#f6f6f6"});
        $(".div3").css("display","block");
      });

      $("#image-gd").click(function(){
        $("#image-content,#image-hr,#image-dev,#image-sm,#image-seo,#image-acc,#image-bus,#image-digital").hide();
        $('#image-gd').css("display","none");
        $('#graphic-design_id').css({"max-width":"100%","flex":"0 0 100%"});
        $('.graphic-design').css({"width":"100%","background-color":"#f6f6f6"});
        $(".div4").css("display","block");
      });

      // $("#image-sm").click(function(){
      //   $("#image-content,#image-hr,#image-gd,#image-dev,#image-seo,#image-acc,#image-bus,#image-digital").hide();
      //   $('#image-sm').css("display","none");
      //   $('#social-media_id').css({"max-width":"100%","flex":"0 0 100%"});
      //   $('.social').css({"width":"100%","background-color":"#f6f6f6"});
      //   $(".div5").css("display","block");
      // });

      $("#image-seo").click(function(){
        $("#image-content,#image-hr,#image-gd,#image-sm,#image-dev,#image-acc,#image-bus,#image-digital").hide();
        $('#image-seo').css("display","none");
        $('#seo_id').css({"max-width":"100%","flex":"0 0 100%"});
        $('.seo').css({"width":"100%","background-color":"#f6f6f6"});
        $(".div6").css("display","block");
      });
      
      // $("#image-acc").click(function(){
      //   $("#image-content,#image-hr,#image-gd,#image-sm,#image-seo,#image-dev,#image-bus,#image-digital").hide();
      //   $('#image-acc').css("display","none");
      //   $('#account_id').css({"max-width":"100%","flex":"0 0 100%"});
      //   $('.account').css({"width":"100%","background-color":"#f6f6f6"});
      //   $(".div7").css("display","block");
      // });

      // $("#image-bus").click(function(){
      //   $("#image-content,#image-hr,#image-gd,#image-sm,#image-seo,#image-acc,#image-dev,#image-digital").hide();
      //   $('#image-bus').css("display","none");
      //   $('#business_id').css({"max-width":"100%","flex":"0 0 100%"});
      //   $('.business').css({"width":"100%","background-color":"#f6f6f6"});
      //   $(".div8").css("display","block");
      // });

      $("#image-digital").click(function(){
        $("#image-content,#image-hr,#image-gd,#image-sm,#image-seo,#image-acc,#image-bus,#image-dev").hide();
        $('#image-digital').css("display","none");
        $('#digital_id').css({"max-width":"100%","flex":"0 0 100%"});
        $('.digital').css({"width":"100%","background-color":"#f6f6f6"});
        $(".div9").css("display","block");
      });

      $("button").click(function(){
        $("#image-content,#image-hr,#image-gd,#image-sm,#image-seo,#image-acc,#image-bus,#image-digital,#image-dev").show();
        //  $('#img3').css("display","none");
        $('.col-md-4').css({"max-width":"33.333333%","flex":"0 0 33.333333%"});
        $('.developer,.content-writer,.human-resource,.digital-marketting,.business_developer,.account,.gd,.search-engine').css({"width":"31.5%","background-color":"#fff"});
        $(".div1,.div2,.div3,.div4,.div5,.div6,.div7,.div8,.div9").css("display","none");
      });
    });

  }
}
