import { FormGroup } from '@angular/forms';

export function passwordMismatchValidator(group: FormGroup)
{
    const password = group.get('password').value;
    const passwordConfirmation = group.get('passwordConfirmation').value;
  
    return password === passwordConfirmation ? null : { passwordNotSame: true }
}