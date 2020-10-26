import { Injectable } from '@angular/core';
import { PowerUps } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PowerUpsService {
  powerUps: PowerUps[]  = [
    {
      name: 'Captain America Shield',
      type: 'Durability',
      amount: 10,
      count: 5,
      isSelected: false,
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Captain_America%27s_shield.svg/450px-Captain_America%27s_shield.svg.png'
    },
    {
      name: 'Mjolnir ',
      type: 'Power',
      amount: 10,
      count: 5,
      isSelected: false,
      imgUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0f/0f5493a53931d684d7180786faea33c30036febd_full.jpg'
    },
    {
      name: 'Iron man nano armor',
      type: 'Combat',
      amount: 10,
      count: 5,
      isSelected: false,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61IPp1X2Y%2BL._AC_SY879_.jpg'
    },
    {
      name: 'Dr. Strange\'s cloak',
      type: 'Intelligence',
      amount: 10,
      count: 5,
      isSelected: false,
      imgUrl: 'https://vignette.wikia.nocookie.net/marvel/images/a/a1/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5_%D0%9E%D0%BA%D0%BE_%D0%90%D0%B3%D0%B0%D0%BC%D0%BE%D1%82%D1%82%D0%BE.png/revision/latest/window-crop/width/200/x-offset/561/y-offset/0/window-width/801/window-height/800?cb=20180708190659&path-prefix=ru'
    },
    {
      name: 'Green lantern\'s ring',
      type: 'Strength',
      amount: 10,
      count: 5,
      isSelected: false,
      imgUrl: 'https://www.superherorings.com/image/catalog/Green_Lantern_Ring_Snake.jpg'
    },
    {
      name: 'Flesh boots',
      type: 'Speed',
      amount: 10,
      count: 5,
      isSelected: false,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71jI09v6zjL._AC_UL1500_.jpg'
    }
  ];

  getPowerUps(): PowerUps[] {
    return this.powerUps;
  }
}
