import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){   
    $("#division_select").bind("change", function() {
      $("." + this.value).show();
      $(".all:not(." + this.value + ")").hide();
  });
});

  }

}
