import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  private counter: number = 0

  display(): number {
    return this.counter;
  }

  add(value: number): void {
    if (this.counter + value < 0) {
      console.log('errore');
    } else {
      this.counter += value;
    }
  }

  sub(value: number): void {
    
    if (this.counter - value < 0) {
      console.log('errore');
    } else {
      this.counter -= value;
    }
  }
  }

    
  

