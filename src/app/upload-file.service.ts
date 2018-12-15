import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadFileService {

  FOLDER = 'jsa-s2/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAIYUO7ALGKSRFLHBA',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'resume-classifier-code',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
