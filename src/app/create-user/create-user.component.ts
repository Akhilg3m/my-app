import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(),
    phone: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      city: new FormControl(null,[Validators.required]),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(null, [Validators.required, Validators.min(100000000000), Validators.max(999999999999)]),
        expiry: new FormControl(),
        cvv: new FormControl()
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor() { 

    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        
        if(data=='dayScholor'){
          this.userForm.addControl('busFee', new FormControl());
          this.userForm.removeControl('hostelFee');
        }
        else if(data=='residential'){
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )

  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userForm);
  }

}
