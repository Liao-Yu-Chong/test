import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  num: any;
  num2: any;
  num3: any;
  num4: any;
  num5: any;
  countA = 0;
  countB = 0;
  countC = 0;
  countD = 0;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.test();
  }

  test() {
    switch (this.num) {
      case '1':
        this.countA += 1;
        break;
      case '2':
        this.countB += 1;
        break;
      case '3':
        this.countC += 1;
        break;
      case '4':
        this.countD += 1;
        break;
      default:
        break;
    }
    switch (this.num2) {
      case '1':
        this.countA += 1;
        break;
      case '2':
        this.countB += 1;
        break;
      case '3':
        this.countC += 1;
        break;
      case '4':
        this.countD += 1;
        break;
      default:
        break;
    }
    switch (this.num3) {
      case '1':
        this.countA += 1;
        break;
      case '2':
        this.countB += 1;
        break;
      case '3':
        this.countC += 1;
        break;
      case '4':
        this.countD += 1;
        break;
      default:
        break;
    }
    switch (this.num4) {
      case '1':
        this.countA += 1;
        break;
      case '2':
        this.countB += 1;
        break;
      case '3':
        this.countC += 1;
        break;
      case '4':
        this.countD += 1;
        break;
      default:
        break;
    }
    switch (this.num5) {
      case '1':
        this.countA += 1;
        break;
      case '2':
        this.countB += 1;
        break;
      case '3':
        this.countC += 1;
        break;
      case '4':
        this.countD += 1;
        break;
      default:
        break;
    }

    this.setUrl();
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
}
