import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".more-info1").click(function(){
        $(".full-info1").css("display","block");
        $(".more-info1").css("display","none");
        });

      $("#less-info1").click(function(){
        $(".full-info1").css("display","none");
        $(".more-info1").css("display","block");
      });

      $(".more-info2").click(function(){
        $(".full-info2").css("display","block");
        $(".more-info2").css("display","none");
        });

      $("#less-info2").click(function(){
        $(".full-info2").css("display","none");
        $(".more-info2").css("display","block");
      });

      $(".more-info3").click(function(){
        $(".full-info3").css("display","block");
        $(".more-info3").css("display","none");
        });

      $("#less-info3").click(function(){
        $(".full-info3").css("display","none");
        $(".more-info3").css("display","block");
      });

      $(".more-info4").click(function(){
        $(".full-info4").css("display","block");
        $(".more-info4").css("display","none");
        });

      $("#less-info4").click(function(){
        $(".full-info4").css("display","none");
        $(".more-info4").css("display","block");
      });
    });
  }

}
