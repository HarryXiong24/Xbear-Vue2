/**
 * 目标(发布者) -- Dep
 * subs 数组：存储所有的订阅者
 * addSub()：添加订阅者
 * notify()：当事件发生，调用所有订阅者的 update() 方法
 */
export class Dep {
  // 记录所有订阅者
  subs: any[]

  constructor () {
    this.subs = []
  }

  // 添加订阅者
  addSub (sub: any) {
    if ( sub && sub.update) {
      this.subs.push(sub)
    }
  }

  notify () {
    this.subs.forEach( (sub) => {
      sub.update()
    })
  }
}