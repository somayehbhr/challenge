import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() rating: number;

  width: number;

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.width = this.rating * 86 / 5;
  }

}
