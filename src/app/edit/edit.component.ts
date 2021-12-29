import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
import { Students } from '../students'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private formBuilder:FormBuilder,
               private _studentService:StudentsService,
               private router:Router,
               private routes : ActivatedRoute) { }

  addForm!: FormGroup;
  ngOnInit():void{
    const routeParams = this.routes.snapshot.params;
    //console.log(routeParams['id'])

    this._studentService.getById(routeParams['id']).subscribe((data:any) =>
    {
      console.log(data)
    });
    this.addForm = this.formBuilder.group({
   
      fName:['',Validators.required],
      lName:['',[Validators.required,Validators.maxLength(12)]],
      email:['',[Validators.required,Validators.maxLength(30)]]
    });
  }
  update(){
    console.log('update');
  }

}
