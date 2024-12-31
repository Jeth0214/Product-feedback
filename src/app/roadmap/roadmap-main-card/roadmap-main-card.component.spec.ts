import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapMainCardComponent } from './roadmap-main-card.component';

describe('RoadmapMainCardComponent', () => {
  let component: RoadmapMainCardComponent;
  let fixture: ComponentFixture<RoadmapMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapMainCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
