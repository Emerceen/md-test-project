import { FormGroup } from '@angular/forms';

export class ReactiveFormsHelperService {
  markFormGroupDirty(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).map(control => {
      formGroup.controls[control].markAsDirty();

      if (formGroup.controls[control]['controls']) {
        this.markFormGroupDirty(<FormGroup>formGroup.controls[control]);
      }
    });
  }
}
