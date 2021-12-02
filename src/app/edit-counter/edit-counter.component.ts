import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

   variable!: number;
  constructor(public addendum:ServiceService) { }

  ngOnInit(): void {
  }

}
