/**
 * 观察者(订阅者) -- Watcher
 * update()：当事件发生时，具体要做的事情
 */
export class Watcher {
  value: any
  
  constructor (value: any) {
    this.value = value
  }
  update () {
    console.log(`I am a ${this.value}.`)
  }
}