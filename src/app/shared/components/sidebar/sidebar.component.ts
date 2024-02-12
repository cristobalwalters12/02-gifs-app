import { Component } from '@angular/core';
import { GifServices } from 'src/app/gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private gifService:GifServices) { }

  get tags() {
    return this.gifService.tags;
  }
  //crear propiedad computada capitalizada
  searchTag(tag:string){
    this.gifService.searchTag(tag);
  }



}
