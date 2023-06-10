import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageObject } from 'src/app/interfaces/image';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css'],
})
export class ImageComponentComponent {
  @Input() image!: ImageObject;
  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();

  onSendMessage(): void {
    this.sendMessage.emit(this.image.nameImage);
  }
}
