import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSearchComponent } from './stack-search.component';

describe('StackSearchComponent', () => {
  let component: StackSearchComponent;
  let fixture: ComponentFixture<StackSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
