import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timeout } from 'rxjs';
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
    setInterval(() => {
      // var ReleaseDate = new Date("Nov 26, 2022 13:00:00").getTime();
      this.DatumHeute = new Date().getTime();
      // var Differenz = this.ReleaseDate - this.DatumHeute;
      var Differenz = this.date - this.DatumHeute;
      var d = Math.floor(Differenz / (1000 * 60 * 60 * 24));
      var h = Math.floor((Differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((Differenz % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((Differenz % (1000 * 60)) / 1000);

      this.htmltimer =
        "<span>" +
        d +
        "<br><i>Tage</i></span><span>" +
        h +
        "<br><i>Stunden</i></span><span>" +
        m +
        "<br><i>Minuten</i></span><span>" +
        s +
        "<br><i>Sekunden</i></span>";

      if (Differenz < 0) {
        // clearInterval(TimerFunction);
        this.htmltimer = "Abgelaufen";
      }
    }, 1000);
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
