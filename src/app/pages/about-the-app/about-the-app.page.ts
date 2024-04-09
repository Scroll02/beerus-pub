import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-the-app',
  templateUrl: './about-the-app.page.html',
  styleUrls: ['./about-the-app.page.scss'],
})
export class AboutTheAppPage implements OnInit {

  constructor() {
   }

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
