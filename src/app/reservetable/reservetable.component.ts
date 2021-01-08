import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.scss']
})
export class ReservetableComponent implements OnInit {

  user={username:'', password:'', remember:false};

  constructor(public diaglogRef:MatDialogRef<ReservetableComponent>,) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('user: ', this.user);
    this.diaglogRef.close();
  }
  selectedValue: number;

  times = [
    {value: 10, viewValue: '10am'},
    {value: 11, viewValue: '11am'},
    {value: 12, viewValue: 'Noon'},
    {value: 13, viewValue: '1pm'},
    {value: 14, viewValue: '2pm'},
    {value: 15, viewValue: '3pm'},
    {value: 16, viewValue: '4pm'},
    {value: 17, viewValue: '5pm'},
    {value: 18, viewValue: '6pm'},
    {value: 19, viewValue: '7pm'},
    {value: 20, viewValue: '8pm'},
    {value: 21, viewValue: '9pm'},


  ];


}
