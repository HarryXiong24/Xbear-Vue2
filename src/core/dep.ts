/**
 * 收集依赖，添加观察者(watcher)
 * 通知所有观察者
 */
class Dep {
  private subs: any[]
  public static target: any

  constructor() {
    this.subs = []
  }

  // 添加观察者
  addSub (sub: any) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }      
  }

  // 发送通知
  notify () {
    this.subs.forEach( (sub) => {
      sub.update()
    })
  }
}

export default Dep