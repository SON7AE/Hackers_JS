// 객체메서드

// 정적메서드

// 1. assign
// assign() 메서드는
// 첫 번째 인자는 대상객체, 두 번째 인자는 출처객체라고 부른다.
// Object.assign(target, source) => source 부분을 target에 집어 넣고 새로운 객체를 반환한다.

const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)
const returnedTarget2 = Object.assign({}, target, source)

console.log(target) // Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target) // Expected output: true
// => 생긴 모양이 똑같아서 true를 반환하는 것이 아니다.

const a = { k: 123 }
const b = { k: 123 }

console.log(a === b) // false => 다른 메모리 주소를 바라보고 있다.

// 2. keys
// keys() 메서는 한 객체의 키값만 추출하여 새로운 배열을 반환하는 매서드입니다.
const user = {
    name: 'HACKERS HRD',
    age: 30,
    email: 'hackers@test.com',
}
const keys = Object.keys(user)
console.log(keys)
console.log(user['name'])

const values = keys.map((key) => {
    return user[key]
})
console.log(values)

// 3. toString
// toString() 메서드에는 인자가 없습니다.
// toString() 메서드는 호출한 객체의 값을 나타내는 문자열을 반환한다.
let point = {
    x: 1,
    y: 2,
    toString: function () {
        return `${this.x}, ${this.y}`
    },
}
String(point)
console.log(String(point))
