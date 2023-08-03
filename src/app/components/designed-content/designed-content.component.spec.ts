import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignedContentComponent } from './designed-content.component';

describe('DesignedContentComponent', () => {
  let component: DesignedContentComponent;
  let fixture: ComponentFixture<DesignedContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignedContentComponent]
    });
    fixture = TestBed.createComponent(DesignedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
