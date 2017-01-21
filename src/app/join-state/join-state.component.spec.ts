/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JoinStateComponent } from './join-state.component';

describe('JoinStateComponent', () => {
  let component: JoinStateComponent;
  let fixture: ComponentFixture<JoinStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
