import LilVue from "./lil-vue"
import { ref } from "../reactivity/reactivity"

const testLilVue = () => {
    const app = new LilVue({
        el: '#app',
        setup() {
            const name = ref('Lil-Vue')
            return {
                name
            }
        }
    })
}

export {
    testLilVue
}