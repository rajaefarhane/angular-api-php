import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  addForm!: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      sId:[],
      fName:['',Validators.required],
      lName:['',[Validators.required,Validators.maxLength(12)]],
      email:['',[Validators.required,Validators.maxLength(30)]]
    });
  }
  onSubmit(){
    console.log(this.addForm.value);
  }
}
