import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrantPassPage } from './grant-pass.page';

describe('GrantPassPage', () => {
  let component: GrantPassPage;
  let fixture: ComponentFixture<GrantPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrantPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
