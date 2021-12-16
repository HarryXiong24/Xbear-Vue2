/**
 * helper functions
 */
const debounce = function (fn: () => any, delay: number) {
    let timer: number = null
    return function () {
        if( timer ) {
            clearTimeout(timer)
        }
        const ctx = this
        const args = arguments
        timer = window.setTimeout(function () {
            fn.apply(ctx, args)
        }, delay)
    }
}

export {
    debounce
}