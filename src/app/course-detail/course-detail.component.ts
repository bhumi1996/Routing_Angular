import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {

  selectedCourse:Course;
courseId:number;

courseService:CourseService = inject(CourseService);
activeRoute:ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.courseId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.activeRoute.paramMap.subscribe((data)=>{
       this.courseId  = +data.get('id');
       this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)
  
    })
    
  }
}
