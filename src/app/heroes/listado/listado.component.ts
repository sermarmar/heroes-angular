import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Capitan Ámerica', 'Hulk', 'Viuda Negra', 'Bruja Escarlata', 'Falcon'];
  heroeRemoved: string = '';

  removeHeroe() {
    this.heroeRemoved = this.heroes.shift() || '';
  }

}
