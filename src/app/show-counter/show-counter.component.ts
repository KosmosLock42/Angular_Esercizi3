import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {

  constructor(public counter: ServiceService) { }

  ngOnInit(): void {
  }

}
