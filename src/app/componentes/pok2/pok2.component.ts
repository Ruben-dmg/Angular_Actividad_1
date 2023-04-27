import { Component } from '@angular/core';

@Component({
  selector: 'app-pok2',
  templateUrl: './pok2.component.html',
  styleUrls: ['./pok2.component.css']
})
export class Pok2Component {

  poke(opcion: string) {
    alert('Has elegido ' + opcion);
  }

}
