import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: [ './questionnaire.component.scss' ],
})
export class QuestionnaireComponent implements OnInit {
  num1: any;
  num2: any;
  num3: any;
  num4: any;
  num5: any;

  countA = 0;
  countB = 0;
  countC = 0;
  countD = 0;

  backPage: any = 1;

  show: boolean = false;

  result_url: string = '/result/';
  result_type: any;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void { }

  submit() {
    this.setUrl();
  }

  plusCount(num: any) {
    switch (num) {
      case 1:
        this.countA += 1;
        break;
      case 2:
        this.countB += 1;
        break;
      case 3:
        this.countC += 1;
        break;
      case 4:
        this.countD += 1;
        break;
      default:
        break;
    }


    if (this.countA + this.countB + this.countC + this.countD == 5) {
      this.show = true;
    }

  }

  setUrl() {
    if (
      this.countA > this.countB &&
      this.countA > this.countC &&
      this.countA > this.countD
    ) {
      this.result_type = 'A'
    } else if (
      this.countB > this.countA &&
      this.countB > this.countC &&
      this.countB > this.countD
    ) {
      this.result_type = 'B'
    } else if (
      this.countC > this.countA &&
      this.countC > this.countB &&
      this.countC > this.countD
    ) {
      this.result_type = 'C'
    } else if (
      this.countD > this.countA &&
      this.countD > this.countB &&
      this.countD > this.countC
    ) {
      this.result_type = 'D'
    } else if (this.countA === this.countB) {
      this.result_type = 'E'
    } else if (this.countA === this.countC) {
      this.result_type = 'D'
    } else if (this.countA === this.countD) {
      this.result_type = 'G'
    } else if (this.countB === this.countC) {
      this.result_type = 'H'
    } else if (this.countB === this.countD) {
      this.result_type = 'I'
    } else if (this.countC === this.countD) {
      this.result_type = 'J'
    } else {
      console.log('ERROR');
    }
    this.countA = 0;
    this.countB = 0;
    this.countC = 0;
    this.countD = 0;

    console.log(this.result_url, this.result_type)
    this._router.navigate([ this.result_url, this.result_type ])
  }

  next(num: any, page: any, bool?: boolean) {
    this.backPage = page;
    switch (this.backPage) {
      case 1:
        this.num1 = num;
        break;
      case 2:
        this.num2 = num;
        break;
      case 3:
        this.num3 = num;
        break;
      case 4:
        this.num4 = num;
        break;
      case 5:
        this.num5 = num;
        break;
    }
    this.plusCount(num);
  }
}
