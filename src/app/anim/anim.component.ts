import { Component, OnInit } from '@angular/core';

import { useAnimation, trigger, state, style, animate, transition } from '@angular/animations';
import { transAnimation } from '../anim';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.css'],
  animations: [
    trigger('anim', [
      transition('open => closed', [
        useAnimation(transAnimation, {
          params: {
            height: '100%',
            opacity: 1,
            backgroundColor: 'green',
            time: '1s'
          }
        })
      ])
      // ,
      // transition('closed => open', [
      //   useAnimation(transAnimation, {
      //     params: {
      //       height: '100%',
      //       opacity: 1,
      //       backgroundColor: 'red',
      //       time: '1s'
      //     }
      //   })
      // ])
    ])
  ]
})

export class AnimComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSendMsg() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
