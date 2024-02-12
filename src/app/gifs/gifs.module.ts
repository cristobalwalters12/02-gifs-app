import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/seach-box/search-box.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { ImageCardComponent } from './components/image-card/image-card.component';


@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardlistComponent, ImageCardComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
