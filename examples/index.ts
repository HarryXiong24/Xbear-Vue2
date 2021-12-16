import { Vue, VueNext } from '../src/index';

let vm = new Vue({
  el: '#vue2',
  data: {
    person: {
      id: '000001',
      name: 'Harry',
    },
    msg: 'I am Harry!',
  },
});
console.log('vue', vm);

let vm_next = new VueNext({
  el: '#vue3',
  data: {
    person: {
      name: 'Junny',
      sex: 'female',
    },
    msg: 'I am Junny!',
  },
});
console.log('vue_next', vm_next);
