/**
 * 数据响应式测试代码
 */
// import {proxy1} from './defineProperty';
import {proxy2} from './proxy';

// 模拟data
let data: any = {
  name: "harry",
  msg: "cool",
};

// // Object.defineProperty()测试代码
// let vm1 = {}
// proxy1(data, vm1)
// vm1.msg = "sa87ashjgd"
// console.log(vm1)

// // Proxy()测试方法
let vm2 = proxy2(data)
vm2.msg = "sa87ashjgd"
console.log(vm2)

