import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ErrorComponent } from './error/error.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'search',component:BannerComponent},
    {path:'courses',component:ServiceComponent},
    {path:'courses/course/:id',component:CourseDetailComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:ErrorComponent}
    
];
