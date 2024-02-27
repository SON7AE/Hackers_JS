// function 함수와 화살표 함수

// 정의
// 함수는 한 번 정의하면 몇 번이고 호출할 수 있는 자바스크립트 코드 블록입니다.
// 자바스크립트 함수는 매개변수화(parameterized) 됩니다.
// 함수 정의에는 매개변수(paramter)라고 불리는 식별자 리스트가 있는데 이들은 함수 바디에서 로컬변수처럼 동작합니다.
// 함수를 호출할 때는 매개변수에 값을 전달하는데 이를 인자(agument)라고 합니다.

// 1. function 함수
// 함수선언은 function 키워드 뒤에 다음 세 가지 구성 요소를 씁니다.
// - 함수 이름이 될 식별자. 이름은 함수 선언에서 뺄 수 없는 부분입니다. 이 이름은 변수 이름으로 쓰이며, 새로 정의된 함수 객체가 이 변수에 할당됩니다
// - 괄호로 감싸고 콤마로 구분한 0개 이상의 식별자 리스트. 이 식별자들은 함수 매개변수 이름이며 함수 바디 안에서 로컬 변수로 동작합니다.
// - 중괄호로 감싼 0개 이상의 자바스크립트 문. 이 문이 함수 바디이며 함수를 호출할 때마다 실행됩니다.

function sum(x, y) {
    console.log(x + y)
    return x + y // 리턴 키워드가 호출된 이후에는 함수가 종료된다는 것을 꼭 기억하자.
    console.log(x + y)
}
sum(10, 20)

const a = sum(100, 200) // 변수로 할당시켜 활용할 수 있다. 매개변수화 된다.
console.log(a)

function order(beverage) {
    if (beverage === '레몬에이드') return console.log(`${beverage}는 현재 품절입니다.`)
    else if (beverage === '아이스 아메리카노') return console.log(`${beverage}는 주문 가능합니다.`)
    else return console.log(`${beverage}는 준비 중인 메뉴입니다.`)
}
order('레몬에이드')
order('아이스 아메리카노')
order('카페라떼')

function test() {
    console.log(arguments) // 인자를 담아주지 않아도 arguments를 이용해 활용할 수도 있다.
    return arguments[0]
}
console.log(test('A', 'B'))

// ----------------------------------------------------------------------------------------------------

// 2. 화살표 함수
// const reSum = (x, y) => {
//     return x + y
// }
// const reSum = (x, y) => x + y
const double = (x) => x * 2
const callArray = () => [10, 20, 30]
const callObject = () => ({
    name: '해커스 HRD',
})
console.log(callObject())
