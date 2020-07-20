/**
 *  Compiler测试
 */
import vue from '../../src/core/vue'

let vm = new vue({
  el: "#app",
  data: {
    id: '000001',
    msg: 'sad',
    person: {
      name: "harry"
    }
  } 
})

console.log(vm)