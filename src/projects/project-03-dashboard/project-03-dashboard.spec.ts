import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project03Dashboard } from './project-03-dashboard';

describe('Project03Dashboard', () => {
  let component: Project03Dashboard;
  let fixture: ComponentFixture<Project03Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project03Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project03Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
