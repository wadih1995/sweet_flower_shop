import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public screenWidth: number = window.innerWidth;
  public carrouselImages: string[] = [];

  private imagesBase = ['home01', 'home02', 'home03', 'home04', 'home05'];

  ngOnInit(): void {
    this.updateCarrouselImages();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.screenWidth = target.innerWidth;
    this.updateCarrouselImages();
  }

  private updateCarrouselImages() {
    if (this.screenWidth > 1280) {
      this.carrouselImages = this.imagesBase.map((name) =>
        this.showCarrouselImage(name, '')
      );
    } else if (this.screenWidth > 800) {
      const existImage = ['home01', 'home03'];
      this.carrouselImages = existImage.map((name) =>
        this.showCarrouselImage(name, '-1')
      );
    } else {
      const existImage = ['home01'];
      this.carrouselImages = existImage.map((name) =>
        this.showCarrouselImage(name, '-2')
      );
    }
  }

  private showCarrouselImage(name: string, suffix: string): string {
    return `../../../../assets/images/${name}${suffix}.png`;
  }
}
