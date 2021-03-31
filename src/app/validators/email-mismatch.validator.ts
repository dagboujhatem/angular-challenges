import { AbstractControl } from '@angular/forms';

export function emailMismatchValidator(group: AbstractControl): {[key: string]: any} | null
{
    const email = group.get('email');
    const confirmEmail = group.get('emailConfirmation');

    // pristine return True if user has not interacted with the control yet.
    // pristine: Valeur booléenne indiquant si le "control" a été modifié.
    if (email.pristine || confirmEmail.pristine) { 
        return null;
    }
  
    return email && confirmEmail && email.value === confirmEmail.value ? null : { emailNotSame: true }
}