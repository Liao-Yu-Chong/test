import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result_type: string = '';

  content_title: string = '';
  content_start: string = '';
  content: string = '';
  content_font_color: string = '';
  font_color: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      if (!params['id']) {
        return;
      }
      this.result_type = params['id'];
    });
  }

  ngOnInit(): void {
    console.log(this.result_type);
    this.content_title = '';
    this.content_start = '';
    this.content = '';
    this.content_font_color = '';
    this.font_color = '';
    this.resultChangeContent();
  }

  resultChangeContent() {
    switch (this.result_type) {
      case 'A':
        this.content_title = '你是...一股太陽下的暖流！';
        this.content =
          '從不畏懼挑戰的你，即使身在黑暗中，也可以像太陽一般帶給周遭的人溫暖，擁有著積極進取的態度，充滿自信和勇氣，始終保持著積極向上的心態，豁達又願意幫助別人的態度是你身上最吸引人的特質。';
        this.content_font_color = '#ea9520';
        this.font_color = '#ba6b02';
        return;
      case 'B':
        this.content_title = '你是...內斂溫和的柔風！';
        this.content =
          '你就像柔風一樣溫和柔軟，與周圍的人和環境能夠和諧共處。有著敏銳的感受力，能夠感受到身邊人的情緒和需求，並且願意伸出援手。很有彈性和適應性，能夠根據不同情況調整自己的態度和行為，不會固執己見。在你身邊總是充滿愉悅而平靜的氛圍。';
        this.content_font_color = '#40a377';
        this.font_color = '#029048';
        return;
      case 'C':
        this.content_title = '你是...令人驚嘆的狂風！';
        this.content =
          '你像狂風一般富有激情與活力，具有強烈的動力和自信心，敢於面對挑戰不怕失敗。有著不屈不撓的精神和優秀的表達能力，具有領導和影響力，能夠激勵和帶領他人前進。但有時可能會過於衝動和固執，需要注意保持冷靜和理智。';
        this.content_font_color = '#556769';
        this.font_color = '#254b62';
        return;
      case 'D':
        this.content_title = '你是...一陣清新的清風！';
        this.content =
          '你像清風一樣清新、穩定，擁有良好的觀察和分析能力，善於發現與欣賞生活中的小美好。擅長思考，不僅可以理解他人，也能清楚地表達自己的想法和感受。總能夠帶給人們不同的看法，具備溫和、理性等優點，但也可能顯得比較內向保守，不夠積極主動。';
          this.content_font_color = '#6f553a';
          this.font_color = '#008b8c';
          return;
      case 'E':
        this.content_title = '你是...溫暖柔和的和風！';
        this.content_start = '和風是日本一種既溫暖又柔和的風。';
        this.content =
          '你像和風一樣活潑，時而溫柔、時而狂野，卻總能以無盡的力量去面對一切。勇氣和決心像狂風一樣強勁，但內心卻如同柔風一般溫柔，讓人不由自主地被吸引。';
        this.content_font_color = '#775c3e';
        this.font_color = '#533a24';
        return;
      case 'F':
        this.content_title = '你是...來的太快的龍捲風！';
        this.content =
          '喜愛刺激感和冒險的你，像是一股旋轉不已龍捲風，帶著強烈的能量和衝勁前進。非常有自信、勇敢和決心，有著強烈的目標和追求，並且願意全力以赴去實現自己的夢想和願望，是人群中亮眼的存在！';
          this.content_font_color = '#696969';
          this.font_color = '#4d4d4d';
          return;
      case 'G':
        this.content_title = '你是...雨後清爽的微風！';
        this.content =
          '你是一個勇敢的冒險家，充滿活力和挑戰精神。樂觀進取，充滿了自信和魅力，總是能夠吸引身邊的人。你擁有聰明才智，思維敏捷，總是能夠找到解決問題的辦法。像一股清爽的風，帶著新鮮的氣息和希望，給人們帶來無限的動力和勇氣。';
        this.content_font_color = '#23abe5';
        this.font_color = '#066fc2';
        return;
      case 'H':
        this.content_title = '你是...成熟迷人的秋風！';
        this.content =
          '你像秋風般清新脫俗，有著獨立的思考和判斷能力，總是能夠看到事情的本質，不為外界的眼光和評價所左右。除此之外，你的個性依然帶有一絲柔和和溫暖，能夠關心和體諒身邊的人。在你的帶領下，周圍的人們也會倍感舒適和放心。';
          this.content_font_color = '#dd7d4b';
          this.font_color = '#913319';
          return;
      case 'I':
        this.content_title = '你是...充滿活力的季風！';
        this.content =
          '你像季風一樣充滿能量，總是能夠帶動周圍的氛圍和情緒。擁有強烈的行動力，同時也有著柔軟和靈活的一面，能夠根據環境和情況調整自己的方向和節奏。但季風有時候也會帶來一些風險和不穩定的因素，因此需要具備一定的風險控制能力和應變能力。';
        this.content_font_color = '#4f8fbb';
        this.font_color = '#32516e';
        return;
      case 'J':
        this.content_title = '你是...帶著花香的春風！';
        this.content =
          '你柔和、溫暖、親和力強，就像是令人心曠神怡的春風。善解人意、樂於助人的個性，讓身邊的人感到輕鬆、舒適和平和。但要注意可能會因為過於友好和包容而缺乏決斷力和堅定性，在面對重要的抉擇或挑戰時可能會猶豫不決或難以做出決定。';
        this.content_font_color = '#c273c6';
        this.font_color = '#922dad';
        return;
    }
  }
}
