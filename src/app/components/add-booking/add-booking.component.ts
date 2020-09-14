import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBookingComponent implements OnInit {

  options: string[]
  locale:any
  today: Date
  formBooking: FormGroup

  constructor(private formBuilder: FormBuilder) { 
    this.options = ['haircut', 'hair-coloring', 'hair-washing', 'hair.starightening']
    if(navigator.language == "es-ES"){
      this.locale = {
        firstDayOfWeek: 1,
        dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        dayNamesMin: [ "D","L","M","X","J","V","S" ],
        monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
        today: 'Hoy',
        clear: 'Borrar'
    }

    } 

    this.today = new Date()


    if (this.today.getMinutes() < 30){
      this.today.setMinutes(30)
    } else {
      this.today.setHours(this.today.getHours() + 1)
      this.today.setMinutes(0)
    }

    this.today.setSeconds(0)
    this.today.setMilliseconds(0)

    this.formBooking = formBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl(this.today),
      services: new FormControl(this.options[0]),

    })

    console.log(this.formBooking.value)
  }

  get name(){
    return this.formBooking.get('name')
  }

  get date(){
    return this.formBooking.get('date')
  }

  get services(){
    return this.formBooking.get('services')
  }

  ngOnInit(): void {

  }

  addBooking() {
    console.log(this.formBooking.value)
  }

}
