import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MBK-Coutndown';

  constructor(private formBuilder: FormBuilder) { }

  date: any;
  state: boolean = true;
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

  //für Image / bgImage vom local Storage
  mainImg: string = ''
  mainImgAsText: any;
  mainImgview: string = ''
  bgImgAsText: any;
  bgImg: string = '';
  bgImgview: string = ''
  isImg: boolean = true;

  // für radio Button die Kategorien
  aktiveCategorie: any;
  categories: string[] = ['MBK', 'Mindset', 'Blockchain', 'NFT', 'Trading'];
  //für Formular 
  checkoutForm = this.formBuilder.group({
    titel: '',
    subtitel: '',
    dateInput: '',
  });

  ngOnInit(): void {

    if (this.bgImgview == '') {
      this.isImg = true
    }

    this.load();
    this.TimerFunction();

  }
  editModusToggel() {
    this.state = !this.state;
  }

  //Timer funktin
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

  // wenn Button erstellen dann...
  onSubmit() {
    this.htmltitel = this.checkoutForm.value.titel;
    this.htmlsubtitel = this.checkoutForm.value.subtitel;
    this.dateInput = this.checkoutForm.value.dateInput;
    this.date = new Date(this.dateInput).getTime();
    this.state = true;
    this.cat();
    this.save();
    this.load();

  }

  cat() {
    // MBK mainImg / bgImg 
    if (this.aktiveCategorie == 'MBK') {
      console.log('ist MBK')
      this.mainImg = '../assets/img/logo-mbk.png'
      this.bgImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(156,960,486)'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23907113'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='366' height='305' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.06'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E"
    }
    // Mindset mainImg / bgImg 
    if (this.aktiveCategorie == 'Mindset') {
      console.log('ist Mindset')
      this.mainImg = '../assets/img/mindset.jpg'
      this.bgImg = '../assets/img/mindset.svg'
    }
    // Blockchain mainImg / bgImg 
    if (this.aktiveCategorie == 'Blockchain') {
      console.log('ist Blockchain')
      this.mainImg = '../assets/img/blockchain.jpg'
      this.bgImg = '../assets/img/blockchain.svg'
    }
    // NFT mainImg / bgImg 
    if (this.aktiveCategorie == 'NFT') {
      console.log('ist NFT')
      this.mainImg = '../assets/img/nft.jpg'
      this.bgImg = '../assets/img/nft.svg'
    }
    // Trading mainImg / bgImg 
    if (this.aktiveCategorie == 'Trading') {
      console.log('ist Trading')
      this.mainImg = '../assets/img/trading.jpg'
      this.bgImg = '../assets/img/trading.svg'
    }
    this.isImg = false
  }

  deleteF() {
    this.checkoutForm.reset();
  }

  save() {
    //save Formular
    this.checkoutFormAsText = JSON.stringify(this.checkoutForm.value)
    localStorage.setItem(`form`, this.checkoutFormAsText);
    //save mainImg
    this.mainImgAsText = JSON.stringify(this.mainImg)
    localStorage.setItem(`mainImg`, this.mainImgAsText);
    //save bgImg
    this.bgImgAsText = JSON.stringify(this.bgImg)
    localStorage.setItem(`bgImg`, this.bgImgAsText);
  }

  load() {
    // Text und Zeit load 
    this.checkoutFormAsText = localStorage.getItem(`form`)
    let valueLocal = JSON.parse(this.checkoutFormAsText);
    this.htmltitel = valueLocal.titel;
    this.htmlsubtitel = valueLocal.subtitel;
    this.dateInput = valueLocal.dateInput;
    this.date = new Date(this.dateInput).getTime();
    //main IMG Load
    this.mainImgAsText = localStorage.getItem(`mainImg`)
    let mainImg = JSON.parse(this.mainImgAsText);
    this.mainImgview = mainImg
    // bg IMG Load 
    this.bgImgAsText = localStorage.getItem(`bgImg`)
    let bgImg = JSON.parse(this.bgImgAsText);
    this.bgImgview = bgImg
    this.isImg = false

  }



}
