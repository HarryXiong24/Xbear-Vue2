/**
 * implement vue reactivity function: ref, reactive, watch, computed
 */
import { debounce } from "../utils";

// 依赖收集器
const dependencyTracker = new Set<symbol>()

/**
 * watchers 需要添加 dependencies 来记录他的依赖，
 * 依赖指 reactive 中的属性
 */
const watchers: Array<{
    callback: () => any,
    dependencies: Set<symbol>
}> = []

const watch = (callback: () => any) => {
    const watcher = {
        callback: debounce(() => {
            // 1. 先清空依赖收集器
            dependencyTracker.clear()
            // 2. 运行一次 watch callback，触发 reactive getter，在 getter 中填充依赖收集器
            callback()
            // 4. 保存 watcher 的依赖
            watcher.dependencies = new Set(dependencyTracker)
        }, 0),
        dependencies: new Set<symbol>()
    }
    watcher.callback() // In Vue 3.0, watchers are fired immediately after component mount.
    watchers.push(watcher)
}

// 添加泛型（extends object 约束 T 是 object)，使用时也可以不手动指定，让类型推导自动推算
const reactive = <T extends object>(target: T): T => {
    // 记录 key Symbol(key) 的 Map
    const keyToSymbolMap = new Map<keyof T, symbol>()
    const getSymbolForKey = (key: keyof T): symbol => {
        const symbol = keyToSymbolMap.get(key) || Symbol()
        if (!keyToSymbolMap.has(key)) {
            keyToSymbolMap.set(key, symbol)
        }
        return symbol
    }
    return new Proxy(target, {
        get(target, key: keyof T) {
            // 3. 在 getter 中填充依赖收集器
            dependencyTracker.add(getSymbolForKey(key))
            return target[key]
        },
        set(target, key: keyof T, value) {
            target[key] = value

            // 5. 根据依赖触发 watcher
            watchers.filter(({ dependencies }) => {
                return dependencies.has(getSymbolForKey(key))
            }).forEach(({ callback }) => {
                callback()
            })

            return true
        },
    })
}

interface Ref<T> {
    value: T
}

const ref = <T>(value: T): Ref<T> => {
    return reactive({ value })
}

const computed = <T>(fn: () => T): Ref<T>=> {
    const r = ref<T>(undefined)
    watch(() => {
        r.value = fn()
    })
    return r
}

export {
    watch,
    reactive,
    ref,
    computed,
}