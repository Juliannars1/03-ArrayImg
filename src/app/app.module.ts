import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponentComponent } from './Components/image-component/image-component.component';
import { ImageArrayObjComponent } from './Components/image-array-obj/image-array-obj.component';
import { TransformTitlePipe } from './pipes/transform-title.pipe';

@NgModule({
  declarations: [AppComponent, ImageComponentComponent, ImageArrayObjComponent, TransformTitlePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
