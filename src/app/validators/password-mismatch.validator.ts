import { AbstractControl } from '@angular/forms';

export function passwordMismatchValidator(group: AbstractControl): {[key: string]: any} | null
{
    const password = group.get('password');
    const passwordConfirmation = group.get('passwordConfirmation');

    if (password.pristine || passwordConfirmation.pristine) { // pristine return True if user has not interacted with the control yet.
        return null;
    }
  
    return password && passwordConfirmation && password === passwordConfirmation ? null : { 'passwordNotSame': true }
}