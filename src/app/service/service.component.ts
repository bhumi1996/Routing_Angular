import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../course.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit{


  couresService:CourseService = inject(CourseService);
  courses:Course[];
  activeRouter:ActivatedRoute = inject(ActivatedRoute);
  searchValue:String;
  
  router:Router =inject(Router);
  navigeToDetail(id:number){
    this.router.navigateByUrl('courses/course/'+id)
  }

  ngOnInit(): void {
    //  this.searchValue = this.activeRouter.snapshot.queryParams['search'];
     
    this.activeRouter.queryParamMap.subscribe(data=>{
      this.searchValue = data.get('search');
       console.log(this.searchValue);

      if(this.searchValue=== undefined || this.searchValue ===''|| this.searchValue===null){
        this.courses = this.couresService.courses;
       }
       else{
         this.courses = this.couresService.courses.filter(x => x.name.toLowerCase().includes(this.searchValue.toLowerCase()));
       }
    });
}
}
