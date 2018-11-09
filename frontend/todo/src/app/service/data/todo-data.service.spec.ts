import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });
});
