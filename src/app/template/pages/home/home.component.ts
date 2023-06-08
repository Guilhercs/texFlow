import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  scrollToSectionContratacao(): void {
    const section = document.getElementById('contratacao');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
