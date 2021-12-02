import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private counter: any = 0;

  display(): number {
    return this.counter;
  }

  add(value: number = 1): void {
   
    
    if(this.counter + value < 0) {
      this.counter = "Error";
    }else{
      this.counter += + value;
    }
  }

  sub(value: number = 1): void | string {
    
    if (this.counter - value < 0) {
      this.counter = "Error";
    } else {
      this.counter -= value;
    }
  }
  }

    
  

