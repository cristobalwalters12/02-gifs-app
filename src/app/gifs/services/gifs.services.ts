import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifServices {

  public gif:gif[] = [];



  private _tagsHistory: string[] = [];
  constructor(private http:HttpClient) {
    this.getLocalStorage();
   }

  private apiKey: string =  'glyTUPElNxXY5dOyOy0BA677WIjDlUeE';

  private url: string = 'https://api.giphy.com/v1/gifs';

  private saveLocalStorage(): void {
    localStorage.setItem('tags', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage(): void {
    const tags = localStorage.getItem('tags');
    if(tags){
      this._tagsHistory = JSON.parse(tags);
    }
    else{
      return;
    }
  }

  get tags() {
    return [...this._tagsHistory];
  }

  private organizeTags(tag: string): void{
    tag = tag.trim().toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((tagHistory) => tagHistory !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

   searchTag(tag: string): void {
    if(tag.trim().length === 0){
      return;

    }
    const params= new HttpParams().set('api_key', this.apiKey).set('q', tag).set('limit', '10').set('offset', '0').set('rating', 'g').set('lang', 'en');
    this.organizeTags(tag);
    this.http.get<SearchResponse>(`${this.url}/search?`, {params})
    .subscribe((response: any) => {
      this.gif = response.data;

    });
  }
}


