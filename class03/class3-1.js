// 배열

// 배열 생성
// 배열을 만드는 방법은 여러가지이다.
// 1. 배열 리터럴
// 2. 이터러블 객체에 분해 연산자 ... 적용
// 3. Array() 생성자
// 4. Array.of() 와 Array.from() 팩토리 메서드

// ----------------------------------------------------------------------------------------------------

// 1. 배열 리터럴
// 배열을 만드는 가장 단순한 방법은 배열 리터럴 입니다.
// 배열 리터럴은 배열 요소를 대괄호 안에서 콤마로 구분한 리스트 형태입니다.

let empty = [] // 요소가 없는 배열
let numbers = [1, 2, 3, 4, 5] // 숫자요소가 5개 있는 배열
let mix = [1, '2', true, { name: 'kim' }] // 타입이 다른 요소가 4개 있는 배열

// 2. 분해 연산자 - spread
let initial = [1, 2, 3, 4, 5]
let newArray = [0, ...initial, 6] // [0, 1, 2, 3, 4, 5, 6]
console.log(newArray)

// 분해연산자는 배열을 얕게 복사할 때도 유용합니다.
let original = ['orinial']
let copy = [...original]
copy[0] = 'reset'
console.log(original)
console.log(copy)

// 3. Array() 생성자
// Array() 생성자를 써서 배열을 만들 수도 있는데 방법은 아래와 같습니다.

// - 인자없이 호출
let newArr1 = new Array() // []

// - 배열 길이를 나타내는 숫자 인자 하나로 호출
let newArr2 = new Array(10) // 지정된 길이를 가진 배열을 생성
console.log(newArr2.length)

// 4. Array.of() / Array.from()
let newArr3 = Array.of() // []
let newArr4 = Array.of(10) // [10]
let newArr5 = Array.of(1, 2, 3) // [1, 2, 3]
console.log(newArr3)
console.log(newArr4)
console.log(newArr5)

// Array.from()이 중요한 이유는 배열 비슷한 객체를 진정한 배열로 바꾸는 방법이기 때문입니다.
// 배열 비슷한 객체란, 숫자인 length 프로퍼티가 있고, 이름이 정수인 프로퍼티에 값이 저장된 객체를 말합니다.
let copy2 = Array.from(original)
console.log(copy2)

// Array.from()은 선택사항으로 두 번째 인자를 받는데,
// 두 번째 인자로 함수를 전달하면 새 배열을 생성할 때 소스 객체의 각 요소를 이 함수에 전달하고 반환값을 배열에 저장합니다.

let original2 = [1, 2, 3, 4, 5]
let copy3 = Array.from(original2, function (element) {
    return element * 2
})
console.log(copy3) // [2, 4, 6, 8, 10]

// ----------------------------------------------------------------------------------------------------

// 배열 읽기
// 배열요소에 접근할 때는 [] 기호를 사용한다.
let getArr1 = original2[0] // 1
let getArr2 = original2[1] // 2
let getArr3 = original2[2] // 3
let getArr4 = original2[3] // 4
let getArr5 = original2[4] // 5

// 배열길이 측정할 때는 .length를 사용한다.
let length = original2.length
console.log(length) // 5

// 배열 요소 추가와 삭제
// 가장 단순한 방법은 새 인덱스에 값을 할당하는 방법이다.
let a = []
a[0] = 'zero'
a[1] = 'one'

console.log(a)

// push() 메서드는 배열 마지막에 값을 추가한다.
let b = []
b.push('zero') // 마지막에 값을 추가한다.
b.push('one', 'two')

console.log(b)

// unshift() 메서드는 배열의 맨 앞에 값을 삽입하고 기존 요소를 뒤로 밀어냅니다.
let c = []
c.push('one')
c.unshift('zero')

console.log(c)

// pop() 메서드는 push() 메서드와 반대로 배열의 맨 마지막 요소를 제거하고 그 값을 반환하고 길이를 1만큼 줄입니다.
let d = ['zero', 'one', 'two']
d.pop()

console.log(d)

// shift() 메서드는 배열의 첫 번째 요소를 제거해 반환하며 길이를 1만큼 줄이고 나머지 요소를 모두 앞으로 당깁니다.
let e = ['zero', 'one', 'two']
e.shift()

console.log(e)

// 결론
// push() <=> unshift()
// pop() <=> shift()
