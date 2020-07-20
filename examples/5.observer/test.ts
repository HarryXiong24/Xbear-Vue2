/**
 * Observer测试
 */
import vue from '../../src/core/vue'

let vm = new vue({
  data: {
    id: '000001',
    msg: 'sad',
    person: {
      name: "harry"
    }
  } 
})

console.log(vm)