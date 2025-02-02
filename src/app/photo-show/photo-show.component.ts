import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  public photoUrl: string = '';

  constructor(private photoService: PhotosService) {
    //this.fetchPhoto();
  }

  ngOnInit() {}

  onFetch() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
}
