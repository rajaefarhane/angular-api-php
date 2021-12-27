import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import {Students} from '../students';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  students!: Students[];

  constructor(private _studentsServices:StudentsService) { }

  ngOnInit(): void {
    this._studentsServices.getStudents().subscribe((data: Students[]) =>{
     this.students=data;
     console.log(this.students);
    });
  }
  delete(students:Students):void{
    //console.log(students.sId);
    this._studentsServices.deleteStudent(students.id).subscribe(data =>{
      this.students = this.students.filter(u => u !== students);
    });

  }

}
