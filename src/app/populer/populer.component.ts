import { Component, inject } from '@angular/core'
import { CourseService } from '../course.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-populer',
  standalone: true,
  imports: [],
  templateUrl: './populer.component.html',
  styleUrl: './populer.component.css'
})
export class PopulerComponent {
  courses:any=this.couresService.courses;
  constructor(private couresService:CourseService){

  }
  router:Router =inject(Router);
  navigeToDetail(id:number){
    this.router.navigateByUrl('courses/course/'+id)
  }
  
}
