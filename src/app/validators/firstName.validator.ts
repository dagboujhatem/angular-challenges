import { AbstractControl } from '@angular/forms';

export function firstNameValidator(firstNameControl: AbstractControl):  {[key: string]: any} | null
{
        // pristine return True if user has not interacted with the control yet.
    // pristine: Valeur booléenne indiquant si le "control" a été modifié.
    if (firstNameControl.pristine) {
        return null;
    }

    const entredFirstName = firstNameControl.value; 
    return /admin/.test(entredFirstName) ? {firstNameNotAdmin: true}: null;
}