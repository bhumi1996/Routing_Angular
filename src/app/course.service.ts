import { Injectable } from '@angular/core';
import { Course } from './interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[]=[
    {
      id:101,
      name:'Angular',
      price:'l00$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQAourYIcLctLI66RED8ua3RDHFGty3tTUjp9VpouAg&s'
    },
    {
      id:102,
      name:'Javascript',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      price:'200$',
      imgpath:'https://banner2.cleanpng.com/20190129/vxi/kisspng-javascript-web-applications-scalable-vector-graphi-5c50fcc8cdff26.2471555315488114648438.jpg'
    },
    {
      id:103,
      name:'Java',
      price:'300$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://banner2.cleanpng.com/20181109/oll/kisspng-java-development-kit-logo-programming-language-por-java-logo-svg-5be5b5a7384425.8069537615417809032305.jpg'
    },
    {
      id:104,
      name:'Web Developement',
      price:'400$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4Qs7Js1NZzz6SOlHlWK4YugXp0YAtk6EqyOLCyebJw&s'
    },
    {
      id:105,
      name:'ReactJs',
      price:'500$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOew7jfPDmFvveYay8tlDYzjo8IGZI1VkBemUJcB_Wg&s'
    },
    {
      id:106,
      name:'Javaacript',
      price:'l00$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://banner2.cleanpng.com/20190129/vxi/kisspng-javascript-web-applications-scalable-vector-graphi-5c50fcc8cdff26.2471555315488114648438.jpg'
    },
    {
      id:107,
      name:'Angular',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      price:'200$',
      imgpath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQAourYIcLctLI66RED8ua3RDHFGty3tTUjp9VpouAg&s'
    },
    {
      id:108,
      name:'Spring Boot',
      price:'300$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzr2RAi4DE_lgiHMez2nJoR5GdwcPHCCvaZ6BSlV_Sw&s'
    },
    {
      id:109,
      name:'AWS',
      price:'400$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://yt3.googleusercontent.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      id:110,
      name:'Angular',
      price:'500$',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla odit ipsa consequuntur  quo at perferendis possimus, excepturi assumenda, expedita doloremque voluptas totam aspernatur.',
      imgpath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQAourYIcLctLI66RED8ua3RDHFGty3tTUjp9VpouAg&s'
    }
  ]
 
  getService(){
    return this.courses;
  }
}
