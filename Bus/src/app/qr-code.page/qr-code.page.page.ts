import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-qr-code.page',
  templateUrl: './qr-code.page.page.html',
  styleUrls: ['./qr-code.page.page.scss'],
})
export class QrCodePagePage implements OnInit {

  constructor() { }

  async scanQRCode() {
    BarcodeScanner.hideBackground(); // make background of WebView transparent

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      // process the scanned content
    }
  }

  async checkPermission() {
    const status = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt // Prompt the user to pick or take a photo
    });
  }

  ngOnInit() {
  }

}
