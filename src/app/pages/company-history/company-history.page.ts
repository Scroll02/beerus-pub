import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-history',
  templateUrl: './company-history.page.html',
  styleUrls: ['./company-history.page.scss'],
})
export class CompanyHistoryPage implements OnInit {

  constructor() { }

  option ={
    slidesPerView:1.5,
    centeredSlides:true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }
  
  ngOnInit() {
  }

}
