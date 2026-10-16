import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project02Skullgirls } from './project-02-skullgirls';

describe('Project02Skullgirls', () => {
  let component: Project02Skullgirls;
  let fixture: ComponentFixture<Project02Skullgirls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project02Skullgirls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project02Skullgirls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
