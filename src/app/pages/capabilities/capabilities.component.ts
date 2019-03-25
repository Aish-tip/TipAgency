import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css']
})
export class CapabilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      
      $(".rest_img").hover(function(){
        $(".first_img img").css("display","none");
      });
      $(".first_img").mouseenter(function(){
        $(this).find(".img-s").fadeIn(800);
      }); 
        $("#capability-container").mouseleave(function(){
        $(".first_img img").fadeIn(500);
        
        });

        $(".rest_img").mouseenter(function(){
          /*  $(this).find(".img-s").css("display", "block");*/
              $(this).find(".img-s").fadeIn(800);
            }); 
    
          $(".rest_img").mouseleave(function(){
           /* $(".img-s").css("display", "none");*/
              $(this).find(".img-s").fadeOut(500);
    
            
      });

    });

  }

}
