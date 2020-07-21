/**
 *  Compiler测试
 */
import Vue from '../../src/core/vue'

let vm = new Vue({
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