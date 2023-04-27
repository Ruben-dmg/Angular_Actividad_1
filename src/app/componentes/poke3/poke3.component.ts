import { Component } from '@angular/core';

@Component({
  selector: 'app-poke3',
  templateUrl: './poke3.component.html',
  styleUrls: ['./poke3.component.css']
})
export class Poke3Component {

  poke(opcion: string) {
    alert('Has elegido ' + opcion);
  }
}
