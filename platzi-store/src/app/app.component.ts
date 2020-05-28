import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // sólo hacer esto en componentes muy cortos
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
