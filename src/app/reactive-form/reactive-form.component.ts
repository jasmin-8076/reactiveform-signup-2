import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { UserRegistration } from "../models/userRegistration";
import { CustomvalidationService } from "../services/customvalidation.service";
import { UserNameValidationService } from "../services/user-name-validation.service";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"],
})
export class ReactiveFormComponent implements OnInit {

  dataArray: Array<UserRegistration>= []
  protected registerForm!: FormGroup<UserRegistration>;
  protected submitted = false;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly customValidator: CustomvalidationService,
    private readonly userNameValidationService: UserNameValidationService
  ) {}


  // mobileNum: new FormControl("",Validators.required),
  // firstName: new FormControl("", Validators.required),
  // secondName:new FormControl("",Validators.required),
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
      
        firstName : new FormControl("", Validators.required),
        lastName:new FormControl("",Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        mobNum: new FormControl(null,Validators.required),
        gender: new FormControl("male", Validators.required)
        ,
        password: new FormControl("", [
          Validators.required,
          this.customValidator.patternValidator(),

        ]),
        confirmPassword: new FormControl("", [Validators.required]),
        terms:new FormControl("",Validators.required)
      },
      {
        validators: [
          this.customValidator.matchPassword("password", "confirmPassword"),
        ],
      }
    );
  }

  protected get registerFormControl() {
    return this.registerForm.controls;
  }

  protected onSubmit(): void {
    this.submitted = true;

    
    
    if (this.registerForm.valid) {
      alert(
        "Form Submitted succesfully!!!\n Check the values in browser console."
      );
      console.log(typeof(this.registerForm.value));
    }
  }

  protected resetForm(): void {
    this.registerForm.reset();
  }
}
