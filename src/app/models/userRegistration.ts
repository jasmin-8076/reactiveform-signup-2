import { FormControl } from "@angular/forms";

export interface UserRegistration {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  mobNum:FormControl<number>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  gender: FormControl<string>;
  term:FormControl<string>;
}


// mobileNum:FormControl<number>;
// firstName: FormControl<string>;
// secondName:FormControl<string>;