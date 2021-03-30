import { FormControl } from '@angular/forms';

export function firstNameValidator(firstNameControl: FormControl)
{
    const firstName = firstNameControl.value;
  
    return /admin/.test(firstName) ? {firstNameNotAdmin: true}: null;
}