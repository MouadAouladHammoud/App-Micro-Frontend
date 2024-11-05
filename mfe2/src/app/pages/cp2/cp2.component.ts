import { Component } from '@angular/core';

@Component({
  selector: 'app-cp2',
  templateUrl: './cp2.component.html',
  styleUrls: ['./cp2.component.scss']
})
export class Cp2Component {

  phoneNumber: string = '';
  phoneNumber2: string = '';

  onInputChange(value: string) {
    console.log("Valeur changée: ", value);
    this.phoneNumber2 = value;
  }
}
