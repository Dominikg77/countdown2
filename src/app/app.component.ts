import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MBK-Coutndown';

  constructor(private formBuilder: FormBuilder) { }

  date: any;
  state: boolean = false;
  DatumHeute: any
  htmltimer: any;
  htmltitel: any;
  htmlsubtitel: any;
  dateInput: any;
  checkoutFormAsText: any;
  day: number = 0;
  hour: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isexpired: boolean = false;


  checkoutForm = this.formBuilder.group({
    titel: '',
    subtitel: '',
    dateInput: '',
  });

  ngOnInit(): void {
    this.load();
    this.TimerFunction();
  }

  editModusToggel() {
    this.state = !this.state;
  }

  TimerFunction() {
    var intervall = setInterval(() => {
      // var ReleaseDate = new Date("Nov 26, 2022 13:00:00").getTime();
      this.DatumHeute = new Date().getTime();
      // var Differenz = this.ReleaseDate - this.DatumHeute;
      var Differenz = this.date - this.DatumHeute;
      this.day = Math.floor(Differenz / (1000 * 60 * 60 * 24));
      this.hour = Math.floor((Differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((Differenz % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((Differenz % (1000 * 60)) / 1000);
      this.isexpired = false
      if (Differenz < 0) {
        this.isexpired = true;
        clearInterval(intervall);
      }
    }, 100);
  }

  onSubmit() {
    this.htmltitel = this.checkoutForm.value.titel;
    this.htmlsubtitel = this.checkoutForm.value.subtitel;
    this.dateInput = this.checkoutForm.value.dateInput;
    this.date = new Date(this.dateInput).getTime();
    this.state = true;
    this.save();

  }

  deleteF() {
    this.checkoutForm.reset();
  }

  save() {
    this.checkoutFormAsText = JSON.stringify(this.checkoutForm.value)
    localStorage.setItem(`form`, this.checkoutFormAsText);
    console.log(this.checkoutForm)
  }

  load() {
    this.checkoutFormAsText = localStorage.getItem(`form`)
    let valueLocal = JSON.parse(this.checkoutFormAsText);
    this.htmltitel = valueLocal.titel;
    this.htmlsubtitel = valueLocal.subtitel;
    this.dateInput = valueLocal.dateInput;
    this.date = new Date(this.dateInput).getTime();
  }

}
