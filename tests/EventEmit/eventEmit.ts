// 模拟Vue发布订阅事件
export class EventEmitter {
  subs: any

  constructor () {
    // 创建一个没有原型对象的空对象
    this.subs = Object.create(null)
  }

  // 注册事件
  $on (eventType: string, handler: Function) {
    // 方式事件的是一个数组，即一个eventType可以对应多个handler
    this.subs[eventType] = this.subs[eventType] || []
    this.subs[eventType].push(handler)
  }

  // 触发事件
  $emit (eventType: string) {
    // 执行所有的handler
    if (this.subs[eventType]) {
      this.subs[eventType].forEach( (handler: Function) => {
        handler()
      })
    }
  }
}