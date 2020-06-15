import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

   private data: BehaviorSubject<any> = new BehaviorSubject(null);
   set_Data(data) {
     this.data.next(data);
   }
   get_data() {
     return this.data.asObservable();
   }

}
