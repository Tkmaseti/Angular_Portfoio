import { Component, OnInit } from '@angular/core';
// import { elementAt } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

slideIndex = 0;


ngOnInit(): void {
  this.showSlides()
}




showSlides = () => {
  const slides = document.getElementsByClassName('mySlides');

  for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none";
  }
  this.slideIndex++;
  if (this.slideIndex > slides.length) {this.slideIndex = 1}

  const slide = slides[this.slideIndex-1]as HTMLElement
  slide.style.display = "block";
  setTimeout(this.showSlides, 10000);
};

}
