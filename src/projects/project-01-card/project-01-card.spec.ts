import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project01Card } from './project-01-card';

describe('Project01Card', () => {
  let component: Project01Card;
  let fixture: ComponentFixture<Project01Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project01Card]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project01Card);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
