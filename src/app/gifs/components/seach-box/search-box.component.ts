import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifServices } from '../../services/gifs.services';

@Component({
  selector: 'gifs-search-box',
  template: `
    <input type="text"
    class="form-control"
    placeholder="Search..."
    (keyup.enter)="searchTag()" #txtTagInput>
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  //no sirve para tomar una referencia local
  public txtTagInput !: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifServices) { }



  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = '';
    console.log({ newTag});
  }
}
