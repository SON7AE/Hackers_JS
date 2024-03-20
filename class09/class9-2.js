// 비동기 - Promise

// --------------------------------------------------------------------------------

// 동기코드란 무엇인가?
// 순차적으로 코드가 진행되는 것을 의미한다.

const x = double(100)
const y = x

function double(x) {
    return x * 2
}

// 위 코드는 동기코드이다.
// 4번째 라인의 코드가 실행되고 완료되어야 5번째 라인의 코드가 실행된다.
// 앞의 코드가 완료되기 전에 그 다음 코드를 실행할 수 없는 상태
// 앞, 뒤의 코드가 종속성을 갖는 것

// 그렇다면 비동기코드는 무엇일까요?
// 앞의 상황이 확정되지 않아도 다음 코드를 실행시킬 수 있도록 하는 것
// 자바스크립트는 정상적으로 비동기 코드를 만들어 낼 수 없다.

function calcValue(a, b) {
    setTimeout(() => {
        return a + b
    }, 1000)
}

const result = calcValue(100, 200)
const z = result
console.log(z) // undefined
// 위의 값이 undefined가 출력이 되는 것은 return 시킨 값을 받지 못했기 때문이다.
// 왜냐하면 setTimeout으로 순차적으로 코드가 흐르도록 하지 않았기 때문이다.
// 이를 해결하기 위해 callback을 사용한다.

function calcValue2(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    }, 1000)
}

const result2 = calcValue2(100, 200, (res) => {
    console.log(res) // 실행시점이 43번째 줄보다 늦다.
})
const z2 = result2
console.log(z2) // undefined

// --------------------------------------------------------------------------------

const result3 = new Promise((resolve, reject) => {
    // resolve라는 함수: Promise 안쪽에서 일어나는 작업이 성공했을 경우
    // resolve("Okay")
    // reject라는 함수: Promise 안쪽에서 일어나는 작업이 실패했을 경우
    reject("Fail")
})
result3
    .then(function (res) {
        console.log(res)
    })
    .catch(function (error) {
        // reject함수의 return 값을 catch에서 받음
        console.log(error)
    })

// 위 코드 자체는 비동기 코드는 아니다. 동기 코드이다.
// Promise에서 setTimeout을 걸어보자.
// 기존의 callback 구조를 then / catch로 받을 수 있게끔 해주는 것이 Promise 이다.
// .then을 계속해서 연결해서 사용할 수 있다. 그러나 이렇게 then을 남발하면 콜백지옥에 빠지게 된다.
// 여러 개의 비동기 상황을 엮을 때, 주로 사용한다.

// --------------------------------------------------------------------------------

// [정리]
// 자바스크립트에서 가장 기본적인 비동기 프로그래밍은 콜백을 통해 이뤄집니다.
// 콜백은 다른 함수에 전달하는 함수입니다.

// 프라미스는 비동기 작업의 결과를 나타내는 객체입니다.
// 결과가 준비됐을 수도 있고, 준비되지 않았을 수도 있는데 프라미스 API는 이를 의도적으로 막연하게 표현합니다.
// 프라미스의 값을 동기적으로 가져올 수 있는 방법은 존재하지 않습니다.

// - 프라미스 객체 then() 메서드
// 콜백함수를 then 메서드에 전달

// fetch(documentURL) // HTTP 요청을 보낸다.
//     .then((response) => response.json()) // 응답의 JSON 바디를 가져온다.
//     .then((document) => {
//         // JSON 분석이 끝나면
//         return render(document) //문서를 사용자에게 표시한다.
//     })
//     .then((rendered) => {
//         // 문서 렌더링이 끝나면
//         cacheInDatabase(rendered) // 로컬 데이터베이스에 캐시한다.
//     })
//     .catch((error) => handle(error)) // 에러처리
