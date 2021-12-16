interface Student {
    name: string,
    age: number,
}

const target: Student = {
    name: 'haha',
    age: 12,
}

const handler: ProxyHandler<Student> = {
    get(obj, prop: keyof Student) {
        console.log(`=== get target.${prop} ===`)
        return obj[prop]
    },
    set(obj, prop: keyof Student, value) {
        console.log(`=== set target.${prop} = ${value}`)
        // @ts-ignore 先解决一下
        obj[prop] = value
        return true
    }
}

const p = new Proxy(target, handler)

console.log(p.name)
console.log(p.age)
p.age = 1
console.log(target)