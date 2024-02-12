import { Component } from '@angular/core';
import { GifServices } from '../../services/gifs.services';
import { gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePageComponent {
  constructor(private gifsService:GifServices) {}
  get gifs(): gif [] {
    return this.gifsService.gif;
  }

}
