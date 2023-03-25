import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
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

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.countA);
    console.log(this.countB);
    console.log(this.countC);
    console.log(this.countD);
  }

  test(num: any) {
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

    // this.setUrl();
  }

  setUrl() {
    if (
      this.countA > this.countB &&
      this.countA > this.countC &&
      this.countA > this.countD
    ) {
      // result_url = 'resultsA.html';
      console.log('A');
    } else if (
      this.countB > this.countA &&
      this.countB > this.countC &&
      this.countB > this.countD
    ) {
      // result_url = 'results_B.html';
      console.log('B');
    } else if (
      this.countC > this.countA &&
      this.countC > this.countB &&
      this.countC > this.countD
    ) {
      // result_url = 'results_C.html';
      console.log('C');
    } else if (
      this.countD > this.countA &&
      this.countD > this.countB &&
      this.countD > this.countC
    ) {
      // result_url = 'results_D.html';
      console.log('D');
    } else if (this.countA === this.countB) {
      // result_url = 'results_E.html';
      console.log('E');
    } else if (this.countA === this.countC) {
      // result_url = 'results_F.html';
      console.log('F');
    } else if (this.countA === this.countD) {
      // result_url = 'results_G.html';
      console.log('G');
    } else if (this.countB === this.countC) {
      // result_url = 'results_H.html';
      console.log('H');
    } else if (this.countB === this.countD) {
      // result_url = 'results_I.html';
      console.log('I');
    } else if (this.countC === this.countD) {
      // result_url = 'results_J.html';
      console.log('J');
    } else {
      // result_url = 'error.html';
      console.log('ERROR');
    }
    this.countA = 0;
    this.countB = 0;
    this.countC = 0;
    this.countD = 0;
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
    if (bool) {
      this.show = true;
    }
    this.test(num);
  }
}
