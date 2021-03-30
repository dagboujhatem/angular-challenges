import { AbstractControl } from '@angular/forms';

export function firstNameValidator(firstNameControl: AbstractControl):  {[key: string]: any} | null
{
    if (firstNameControl.pristine) { // pristine return True if user has not interacted with the control yet.
        return null;
    }

    const entredFirstName = firstNameControl.value; 
    return /admin/.test(entredFirstName) ? {firstNameNotAdmin: true}: null;
}