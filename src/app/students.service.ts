import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private http:HttpClient) { }
  getStudents(){
    return this.http.get<Students[]>('http://localhost/test/teste/angularapiPhp/php/list.php');
  }

}
