import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidations {
  static notBlank(control: AbstractControl): ValidationErrors | null {
    return (control.value || '').trim().length === 0 ? {'notblank': true} : null;
  }
}
