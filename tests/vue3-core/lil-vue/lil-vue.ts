/**
 * lil-vue api
 */
import { Compiler } from '../compiler/compiler'

interface LiLVueOptions {
    el: string,
    template?: string,
    setup: () => any
}

export default class LilVue {
    setupReturned: object

    constructor(public options: LiLVueOptions) {
        this.setupReturned = this.options.setup()
        new Compiler(this.options.el, this)
    }
}
