import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { UploadFileService } from './upload-file.service';

@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
