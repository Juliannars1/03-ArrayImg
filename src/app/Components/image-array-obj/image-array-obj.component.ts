import { Component } from '@angular/core';
import { ImageObject } from 'src/app/interfaces/image';

@Component({
  selector: 'app-image-array-obj',
  templateUrl: './image-array-obj.component.html',
  styleUrls: ['./image-array-obj.component.css'],
})
export class ImageArrayObjComponent {
  images: ImageObject[] = [
    {
      urlImage:
        'https://cdn.pixabay.com/photo/2022/03/01/20/08/spray-can-7041935__340.jpg',
      nameImage: 'bart simpson_10236584',
    },
    {
      urlImage:
        'https://cdn.pixabay.com/photo/2016/01/14/20/27/fan-art-1140718__340.png',
      nameImage: 'casa simpson_95647521',
    },
    {
      urlImage:
        'https://cdn.pixabay.com/photo/2019/03/26/12/34/simpsons-4082521__340.jpg',
      nameImage: 'familia simpson_36584218',
    },
  ];
  selectedImageName: string = 'Aqui va el nombre de la Imagen';

  onSendMessage(nameImage: string): void {
    this.selectedImageName = nameImage;
  }
}
