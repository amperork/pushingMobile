import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  generateQR(data: string): Promise<string> {
    return QRCode.toDataURL(data);
  }

  constructor() { }
}
