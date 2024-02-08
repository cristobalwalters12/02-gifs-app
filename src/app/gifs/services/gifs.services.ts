import { Injectable } from '@angular/core';

//si se quiere exportar a un modulo se tiene que importar en providers
@Injectable({providedIn: 'root'})
export class GifServices {

  private _tagsHistory: string[] = [];
  constructor() { }

  get tags() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void{
    this._tagsHistory.unshift(tag);
    console.log(this._tagsHistory);
  }



}
