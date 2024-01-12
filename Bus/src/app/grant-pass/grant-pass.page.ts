import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { QrCodeService } from '../providers/qr-code.service';

@Component({
  selector: 'app-grant-pass',
  templateUrl: './grant-pass.page.html',
  styleUrls: ['./grant-pass.page.scss'],
})
export class GrantPassPage implements OnInit {
  studentId: string = '';
  qrCode: string | null = null;

  constructor(
    private userService: UserService, 
    private qrCodeService: QrCodeService
  ) { }

  grantPass() {
    this.userService.getStudentById(this.studentId).subscribe(student => {
      if (student && student.address && student.address.city === 'Eyang' && new Date().getDay() === 4) {
        this.qrCodeService.generateQR(`Pass for: ${this.studentId}`).then(qrCode => {
          this.userService.updateStudentWithQRCode(this.studentId, qrCode)
            .then(() => console.log('QR Code stored successfully'))
            .catch(error => console.error('Error storing QR code: ', error));
        });
      } else {
        console.log('Student not found or criteria not met');
        // Handle non-eligible student
      }
    });
  }

  ngOnInit() {
  }

}
