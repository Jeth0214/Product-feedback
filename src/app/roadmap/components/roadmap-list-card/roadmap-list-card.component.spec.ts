import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapListCardComponent } from './roadmap-list-card.component';

describe('RoadmapListCardComponent', () => {
  let component: RoadmapListCardComponent;
  let fixture: ComponentFixture<RoadmapListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
