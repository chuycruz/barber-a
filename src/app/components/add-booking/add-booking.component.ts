import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  options: string[]

  constructor() { }

  ngOnInit(): void {
    this.options = ['haircut', 'hair-coloring', 'hair-washing', 'hair.starightening']
  }

}
