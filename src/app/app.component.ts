import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  parallaxUp: string = 'translate3d(0, 0, 0)';
  parallaxDown: string = 'translate3d(0, 0, 0)';
  isMobile: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (!this.isMobile) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      // Efecto parallax arriba
      this.parallaxUp = `translate3d(0, ${scrollTop * -0.6}px, 0)`;
      // Efecto parallax abajo
      this.parallaxDown = `translate3d(0, ${scrollTop * 0.1}px, 0)`;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkIfMobile();
  }

  ngOnInit() {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile) {
      this.parallaxUp = 'translate3d(0, 0, 0)'; // Desactiva el parallax arriba
      this.parallaxDown = 'translate3d(0, 0, 0)'; // Desactiva el parallax abajo
    }
  }

  // Animación del botón
  scrollToNextSection() {
    const nextSection = document.getElementById('next-section');
    if (!nextSection) return;

    const targetPosition = nextSection.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
}
