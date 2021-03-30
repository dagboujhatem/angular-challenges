import { FormGroup } from '@angular/forms';

export function emailMismatchValidator(group: FormGroup)
{
    const email = group.get('email').value;
    const confirmEmail = group.get('emailConfirmation').value;
  
    return email === confirmEmail ? null : { emailNotSame: true }
}