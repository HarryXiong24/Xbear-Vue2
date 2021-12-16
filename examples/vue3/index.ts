import { VueNext, ref } from '../../src';

const vm_next = new VueNext({
  el: '#vue3',
  setup() {
    const id = ref('000002');
    const name = ref('Junny');
    const msg = ref('I am Junny!');
    return {
      id,
      name,
      msg,
    };
  },
});

export default vm_next;
