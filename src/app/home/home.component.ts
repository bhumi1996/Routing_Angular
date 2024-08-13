import { Component, OnInit, inject } from '@angular/core';
import { PopulerComponent } from '../populer/populer.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopulerComponent,RouterLink,BannerComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  route:Router=inject(Router);
  activeRoute:ActivatedRoute=inject(ActivatedRoute);
  navigateToCourse(){
  // this.route.navigate(['course'],{relativeTo:this.activeRoute});
     this.route.navigateByUrl('courses');

  }

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe((data)=>{
      this.jumpToSection(data);
    })
  }

  jumpToSection(section: string){
    document.getElementById(section).scrollIntoView({behavior:'smooth'})
  }
}
