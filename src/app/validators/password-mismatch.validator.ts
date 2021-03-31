import { AbstractControl } from '@angular/forms';

export function passwordMismatchValidator(group: AbstractControl): {[key: string]: any} | null
{
    const password = group.get('password');
    const passwordConfirmation = group.get('passwordConfirmation');
    
    // pristine return True if user has not interacted with the control yet.
    // pristine: Valeur booléenne indiquant si le "control" a été modifié.
    if (password.pristine || passwordConfirmation.pristine) {
        return null;
    }
  
    return password && passwordConfirmation && password.value === passwordConfirmation.value ? null : { 'passwordNotSame': true }
}