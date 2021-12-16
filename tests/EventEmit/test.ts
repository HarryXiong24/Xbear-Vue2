/**
 * 自定义订阅事件测试代码
 */
import {EventEmitter} from './eventEmit'

let event = new EventEmitter()
event.$on('click', () => {
  console.log("It is click1.")
})
event.$on('click', () => {
  console.log("It is click2.")
})

event.$emit('click')
