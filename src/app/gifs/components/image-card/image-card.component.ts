import { Component, Input, OnInit } from '@angular/core';
import { gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  ngOnInit(): void {
    if(this.gifs.title === 'undefined'){
      this.gifs.title = 'Sin titulo';
    }
  }
  @Input()
  public gifs!: gif;

}
