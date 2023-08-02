import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonName: string = '';
  @Input() color: string = ''; // Cor do botão (ex: 'red', '#ff0000', 'rgb(255, 0, 0)')
  @Input() backgroundColor: string = ''; // Cor de fundo do botão
}
