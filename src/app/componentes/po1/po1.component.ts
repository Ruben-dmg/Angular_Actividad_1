import { Component } from '@angular/core';

@Component({
  selector: 'app-po1',
  templateUrl: './po1.component.html',
  styleUrls: ['./po1.component.css']
})
export class Po1Component {
  
  poke(opcion: string) {
    alert('Has elegido ' + opcion);
  }
}
