import { Component, OnInit } from '@angular/core';

export interface IPropertyRow {
  name: string;
  mandatory: boolean;
  type: string;
  description: string;
  defaultValue?: string;
}

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
properties: IPropertyRow[] = [
    { name: 'height',
      mandatory: false,
      type: 'number',
      description: `Parallax container height in pixels`,
      defaultValue: `500`,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
