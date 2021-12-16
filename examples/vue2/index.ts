import { Vue } from '../../src';

const vm = new Vue({
  el: '#vue2',
  data: {
    person: {
      id: '000001',
      name: 'Harry',
    },
    msg: 'I am Harry!',
  },
});

export default vm;
