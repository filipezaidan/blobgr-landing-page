import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureContentComponent } from './infrastructure-content.component';

describe('InfrastructureContentComponent', () => {
  let component: InfrastructureContentComponent;
  let fixture: ComponentFixture<InfrastructureContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfrastructureContentComponent]
    });
    fixture = TestBed.createComponent(InfrastructureContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
