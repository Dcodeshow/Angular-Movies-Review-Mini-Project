import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbRatingModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [StarRatingComponent],
  imports: [CommonModule, NgbRatingModule, NgbModule],
  exports: [StarRatingComponent],
})
export class FeatureModule {}
