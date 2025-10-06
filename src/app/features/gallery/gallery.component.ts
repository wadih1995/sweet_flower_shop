import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public gallerySections = [
    {
      title: 'Dawn Bloom',
      subTitle: '$55/Bunch',
      baseName: 'gallery-picture-1',
    },
    {
      title: 'Solstice Stems',
      subTitle: '$30/Bunch',
      baseName: 'gallery-picture-2',
    },
    {
      title: 'Whisper GreenS',
      subTitle: '$120/Bunch',
      baseName: 'gallery-picture-3',
    },
    {
      title: 'Clarity PetalS',
      subTitle: '$55/Bunch',
      baseName: 'gallery-picture-4',
    },
    {
      title: 'River Stone',
      subTitle: '$30/Bunch',
      baseName: 'gallery-picture-5',
    },
    {
      title: 'Moonlit Meadow',
      subTitle: '$120/Bunch',
      baseName: 'gallery-picture-6',
    },
    {
      title: 'Ember Leaf',
      subTitle: '$55/Bunch',
      baseName: 'gallery-picture-7',
    },
    {
      title: 'Skyline Bloom',
      subTitle: '$75/Bunch',
      baseName: 'gallery-picture-8',
    },
    {
      title: 'Still Waters',
      subTitle: '$250/Bunch',
      baseName: 'gallery-picture-9',
    },
  ];
  public gallerySectionsTwo = [
    {
      title: 'FLORAL INSTALLATIONS',
      subTitle:
        'We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.',
      baseName: 'gallery-picture-10',
    },
    {
      title: 'NATIVE PLANT ARRANGEMENTS',
      subTitle:
        'Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.',
      baseName: 'gallery-picture-11',
    },
    {
      title: 'CUSTOM FLORAL CONCEPTS',
      subTitle:
        'Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.',
      baseName: 'gallery-picture-12',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
