import { Vue, VueNext } from '../src/index';

// let vm = new Vue({
//   el: '#app',
//   data: {
//     id: '000001',
//     msg: 'sad',
//     person: {
//       name: 'harry',
//     },
//   },
// });
// console.log('vue', vm);

let vm_next = new VueNext({
  el: '#app',
  data: {
    id: '000001',
    msg: 'sad',
    person: {
      name: 'harry',
    },
  },
});
console.log('vue_next', vm_next);
