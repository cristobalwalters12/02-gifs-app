import { Component, Input } from '@angular/core';
import { gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
})
export class CardlistComponent {
  @Input()
  public gifsCards : gif[]= [];

}
