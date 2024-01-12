import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrCodePagePage } from './qr-code.page.page';

describe('QrCodePagePage', () => {
  let component: QrCodePagePage;
  let fixture: ComponentFixture<QrCodePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrCodePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
