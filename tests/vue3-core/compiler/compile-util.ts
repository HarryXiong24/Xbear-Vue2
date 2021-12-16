/**
 * Compile Utils
 */
import LilVue from "../lil-vue/lil-vue"

const compileUtil = {
    handleText(node: Node, expr: string, vm: LilVue) {
        let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getValue(vm, args[1])
        })
        this.nodeUpdater.textUpdater(node, content)
    },
    nodeUpdater: {
        textUpdater(node: Node, value: string) {
            node.textContent = value
        }
    },
    getValue(vm: LilVue, expr: string) {
        const { setupReturned } = vm
        type setupReturnedType = typeof setupReturned
        return expr.split(".").reduce((data, current: keyof setupReturnedType) => {
            return data[current]
        }, setupReturned);
    }
}

export {
    compileUtil
}