import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

private counter = new BehaviorSubject<number>(0);

  constructor() { }

  

  display(): number {
    return this.counter.getValue();
  }

  add(value: number = 1): void {
   
    this.counter.subscribe();
    this.counter.next( value ? (this.counter.value +  +value ): (this.counter.value + 1 ));

  }

  sub(value: number = 1): void | string {
    this.counter.subscribe();
    this.counter.next( value ? (this.counter.value - -value ): (this.counter.value - 1 ));
  }
  }

    
  

