import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcartComponent } from './taskcart.component';

describe('TaskcartComponent', () => {
  let component: TaskcartComponent;
  let fixture: ComponentFixture<TaskcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskcartComponent]
    });
    fixture = TestBed.createComponent(TaskcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
