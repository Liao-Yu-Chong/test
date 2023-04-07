import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: [ './result.component.scss' ]
})
export class ResultComponent implements OnInit {

  result_type: string = '';

  content_title: string = '';
  content_start: string = '';
  content: string = '';

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
    this.resultChangeContent();
  }

  resultChangeContent() {
    switch (this.result_type) {
      case 'A':
        this.content_title = '你是...一股太陽下的暖流！'
        this.content = '從不畏懼挑戰的你，即使身在黑暗中，也可以像太陽一般帶給周遭的人溫暖，擁有著積極進取的態度，充滿自信和勇氣，始終保持著積極向上的心態，豁達又願意幫助別人的態度是你身上最吸引人的特質。'
        return
    }
  }
}
