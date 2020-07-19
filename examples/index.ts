/**
 * 数据响应式测试代码
 */
// import {proxy1} from './dataReactive/defineProperty';
// import {proxy2} from './dataReactive/proxy';


// // 模拟data
// let data: any = {
//   name: "harry",
//   msg: "cool",
// };

// let vm1 = {}
// proxy1(data, vm1)
// vm1.msg = "sa87ashjgd"
// console.log(vm1)

// let vm2 = proxy2(data)
// vm2.msg = "sa87ashjgd"
// console.log(vm2)

/**
 * 自定义订阅事件测试代码
 */
// import {EventEmitter} from './eventEmit/eventEmit'

// let event = new EventEmitter()
// event.$on('click', () => {
//   console.log("It is click1.")
// })
// event.$on('click', () => {
//   console.log("It is click2.")
// })

// event.$emit('click')

/**
 * 发布-订阅模式
 */
import {Dep} from './dep-watcher/dep'
import { Watcher } from './dep-watcher/watcher';

let watch1 = new Watcher('watch1');
let watch2 = new Watcher('watch2');

let dep = new Dep();
dep.addSub(watch1);
dep.addSub(watch2);

dep.notify();