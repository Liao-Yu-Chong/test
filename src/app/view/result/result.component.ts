import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: [ './result.component.scss' ]
})
export class ResultComponent implements OnInit {

  result_type: string = '';

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      if (!params[ 'id' ]) {
        return
      }
      this.result_type = params[ 'id' ];
    });
  }

  ngOnInit(): void {
    console.log(this.result_type)
  }
}
