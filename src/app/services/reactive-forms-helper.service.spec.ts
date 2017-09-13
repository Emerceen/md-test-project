import { FormBuilder } from '@angular/forms';
import { async, TestBed, getTestBed } from '@angular/core/testing';

import { ReactiveFormsHelperService } from './reactive-forms-helper.service';

describe('Service: ReactiveFormsHelperService', () => {
  let service: ReactiveFormsHelperService;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ReactiveFormsHelperService
      ]
    });
    const testbed = getTestBed();
    service = testbed.get(ReactiveFormsHelperService);
  }));

  describe('markFormGroupDirty()', () => {
    const formGroup = formBuilder.group({
      test: formBuilder.control(''),
      testGroup: formBuilder.group({
        test: formBuilder.control(''),
        test2: formBuilder.control('')
      }),
      testGroupGroup: formBuilder.group({
        testGroup: formBuilder.group({
          test: formBuilder.control(''),
          test2: formBuilder.control('')
        }),
        testGroup2: formBuilder.group({
          test: formBuilder.control(''),
          test2: formBuilder.control('')
        })
      })
    });

    it('should mark all controls as dirty', () => {
      service.markFormGroupDirty(formGroup);
      expect(formGroup.controls.test.dirty).toBeTruthy();
      expect(formGroup.controls.testGroup.get('test').dirty).toBeTruthy();
      expect(formGroup.controls.testGroup.get('test2').dirty).toBeTruthy();
      expect(formGroup.controls.testGroupGroup.get('testGroup').get('test').dirty).toBeTruthy();
      expect(formGroup.controls.testGroupGroup.get('testGroup').get('test2').dirty).toBeTruthy();
      expect(formGroup.controls.testGroupGroup.get('testGroup2').get('test').dirty).toBeTruthy();
      expect(formGroup.controls.testGroupGroup.get('testGroup2').get('test2').dirty).toBeTruthy();
    });
  });
});
