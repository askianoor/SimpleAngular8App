import { animation, trigger, animateChild, group, transition, animate, style, query } from '@angular/animations';

export const transAnimation = animation([
    style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);


// trigger('anim', [
//     state('open', style({
//         height: '200px',
//         opacity: 1,
//         backgroundColor: 'yellow'
//     })),
//     state('close', style({
//         height: '400px',
//         opacity: 0.5,
//         backgroundColor: 'green'
//     })),
//     transition('open => closed', [
//         animate('1s')
//     ]),
//     transition('closed => open', [
//         animate('1s')
//     ])
// ])
