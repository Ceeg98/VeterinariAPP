import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-registro-cita',
  templateUrl: './registro-cita.page.html',
  styleUrls: ['./registro-cita.page.scss'],
})
export class RegistroCitaPage implements OnInit {

  startDate:String = '';
  minDate:String = '';
  maxDate:String = ''

  constructor() { }

  ngOnInit() {
    this.startDate = new Date().toISOString();
    this.minDate = new Date().toISOString();
  }

}
