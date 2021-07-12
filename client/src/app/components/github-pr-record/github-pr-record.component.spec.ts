import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPrRecordComponent } from './github-pr-record.component';

describe('GithubPrRecordComponent', () => {
  let component: GithubPrRecordComponent;
  let fixture: ComponentFixture<GithubPrRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubPrRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPrRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
