import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomndedProudectComponent } from './recomnded-proudect.component';

describe('RecomndedProudectComponent', () => {
  let component: RecomndedProudectComponent;
  let fixture: ComponentFixture<RecomndedProudectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomndedProudectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomndedProudectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
