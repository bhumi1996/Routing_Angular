import { Injectable } from '@angular/core';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users :User[]=[
   new User (1, 'Bhumika Dewangan','bd','12345'),
   new User (1, 'John smith','js','12345'),
   new User (1, 'Manoj Kumar','mj','12345'),
   new User (1, 'Kavita Rani','kr','12345')
  ]

}
