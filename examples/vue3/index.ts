import VueNext from '../../src/vue3-core/Vue';
import { ref } from '../../src/vue3-core/Reactivity';

const vm_next = new VueNext({
  el: '#app',
  setup() {
    const name = ref('Lil-Vue');
    return {
      name,
    };
  },
});

export default vm_next;
