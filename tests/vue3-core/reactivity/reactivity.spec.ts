import { reactive, watch, ref, computed } from './reactivity'


export const consoleCarMoving = () => {
    // use modulo to make car moving in a loop
    const mod = (x: number, y: number) => ((x % y) + y) % y

    const MAX_ROAD_LENGTH = 10

    const cars = [
        reactive({
            position: 0,
            speed: 2,
        }),
        reactive({
            position: 3,
            speed: 1,
        })
    ]

    setInterval(() => {
        for (const car of cars) {
            car.position = mod(car.position + car.speed, MAX_ROAD_LENGTH)
        }
    }, 1000)

    let callCount = 0
    watch(() => {
        const road = '_'.repeat(MAX_ROAD_LENGTH).split("")
        for (const car of cars) {
            road[car.position] = '🚗'
        }

        console.clear()
        console.log(road.reverse().join(''))
        console.log(`callCount: ${++callCount}`)
    })
}

export const testDependencyTracking = () => {
    const r1 = reactive({ x: 0})
    const r2 = reactive({ x: 0})

    setInterval(() => {
        r1.x++
    }, 1000)

    setInterval(() => {
        r2.x--
    }, 6000)

    watch(() => {
        console.log(`r1.x: ${r1.x}`)
    })

    watch(() => {
        console.log(`r2.x: ${r2.x}`)
    })
}

export const testWatcherDependencyChange = () => {
    const r1 = reactive({ isReady: false })
    const r2 = reactive({ x: 1 })

    setTimeout(() => {
        r1.isReady = true
    }, 5000)

    setInterval(() => {
        r2.x++
    }, 500)

    watch(() => {
        if (!r1.isReady) return
        console.log(`r2.x: ${r2.x}`)
    })

    /**
     * result: r2.x: 3
     * 因为只在 watcher 第一次运行时添加依赖，而 <code>console.log(`r2.x: ${r2.x}`)</code> 第一次并不会运行
     * 需要修改在每一次 watcher 运行时修改依赖
     */
}

export const testRef = () => {
    const r1 = ref(1)
    setInterval(() => {
        r1.value++
    }, 1000)

    watch(() => {
        console.log(`r1.value: ${r1.value}`)
    })
}

export const testComputed = () => {
    const r1 = ref(1)
    setInterval(() => {
        r1.value++
    }, 1000)

    const hahaR1 = computed(() => {
        return `haha ${r1.value}`
    })
    setInterval(() => {
        console.log(`hahaR1: ${hahaR1.value}`)
    }, 1000)
}
