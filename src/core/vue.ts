/**
 * 实现功能
 * 负责接收初始化的参数(选项)
 * 负责把 data 中的属性注入到 Vue 实例，转换成 getter/setter
 * 负责调用 observer 监听 data 中所有属性的变化
 * 负责调用 compiler 解析指令/插值表达式
 */
class Vue {
  private $options: any
  private $data: any
  private $el: any

  constructor (options: any) {
    // 1. 通过属性保存选项的数据
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    // 2. 负责把 data 注入到 Vue 实例的this中。由于使用了Proxy，因此需要使用Object.assign()拷贝至this对象
    Object.assign(this, this._proxyData(this.$data))
    // 3. 负责调用 Observer 实现数据劫持
    // 4. 负责调用 Compiler 解析指令/插值表达式等
  }

  // 实现数据劫持Observer
  private _proxyData (data: any): any {
    // 使用Proxy代替Object.defineProperty
    let vm = new Proxy(data, {
      get (target, key) {
        return target[key]
      },
      set (target, key, newValue) {
        if (target[key] === newValue) {
          return true
        }
        target[key] = newValue
        return true
      }
    })

    // 返回一个对象，代理参数data里所有的属性
    return vm
  }
}

export default Vue

