import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDasboardPage } from './user-dasboard.page';

describe('UserDasboardPage', () => {
  let component: UserDasboardPage;
  let fixture: ComponentFixture<UserDasboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserDasboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
