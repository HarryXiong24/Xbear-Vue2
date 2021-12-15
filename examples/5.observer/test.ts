/**
 * Observer测试
 */
 import Vue from '../../src/vue'

let vm = new Vue({
  data: {
    id: '000001',
    msg: 'sad',
    person: {
      name: "harry"
    }
  } 
})

console.log(vm)