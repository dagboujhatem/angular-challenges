import { AbstractControl } from '@angular/forms';

export function emailMismatchValidator(group: AbstractControl): {[key: string]: any} | null
{
    const email = group.get('email');
    const confirmEmail = group.get('emailConfirmation');

    if (email.pristine || confirmEmail.pristine) { // pristine return True if user has not interacted with the control yet.
        return null;
    }
  
    return email && confirmEmail && email.value === confirmEmail.value ? null : { emailNotSame: true }
}