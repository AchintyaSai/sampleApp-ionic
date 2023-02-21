import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardObject } from '../models/ui-models/card-object.model';

@Component({
  selector: 'app-sample-animation',
  templateUrl: './sample-animation.page.html',
  styleUrls: ['./sample-animation.page.scss'],
})
export class SampleAnimationPage implements OnInit {

  canvas: any;
  back : boolean = false;

  cards : Array<CardObject> =[{}]
  private ctx: any;
  
  constructor() { 
    
  }

  ngOnInit() {
    // console.log("OnInit")
    // this.canvas = document.getElementById('canvas');
    // this.ctx = this.canvas.getContext('2d');
    // this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(20, 20, 10, 50);
  }

  flipped()
  {
    this.back = !this.back;
  }
}
