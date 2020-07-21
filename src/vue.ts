import Observer from './observer';
import Compiler from './compiler';
/**
 * 实现功能
 * 负责接收初始化的参数(选项)
 * 负责把 data 中的属性注入到 Vue 实例
 * 负责调用 observer 监听 data 中所有属性的变化，转换成 getter/setter
 * 负责调用 compiler 解析指令/插值表达式
 */
class Vue {
  public $options: any
  public $data: any
  public $el: any

  constructor (options: any) {
    // 1. 通过属性保存选项的数据
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    // 2. 负责把 data 注入到 Vue 实例的this中
    // 由于使用了Proxy，因此需要使用Object.assign()拷贝至this对象
    // Object.assign(this, this._proxyData(this.$data))
    this._proxyData(this.$data)
    // 3. 负责调用 Observer 实现数据劫持
    new Observer(this.$data)
    // 4. 负责调用 Compiler 解析指令/插值表达式等
    new Compiler(this)
  }

  // 实现数据劫持Observer
  _proxyData (data: any): any {
    Object.keys(data).forEach(key => {
      // 把data的属性注入到vue实例中
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
          return data[key]
        },
        set (newValue) {
          if (newValue === data[key]) {
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}

export default Vue

