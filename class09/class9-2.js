// 비동기 - Promise

// 자바스크립트에서 가장 기본적인 비동기 프로그래밍은 콜백을 통해 이뤄집니다.
// 콜백은 다른 함수에 전달하는 함수입니다.

// 프라미스는 비동기 작업의 결과를 나타내는 객체입니다.
// 결과가 준비됐을 수도 있고, 준비되지 않았을 수도 있는데 프라미스 API는 이를 의도적으로 막연하게 표현합니다.
// 프라미스의 값을 동기적으로 가져올 수 있는 방법은 존재하지 않습니다.

let valid = false

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valid) {
                console.log('특정조건 이행')
                resolve('SUCCESS')
            } else {
                console.log('특정조건 불이행')
                reject('FAIL')
            }
        }, ms)
    })
}

delay(3000)
    .then((result) => {
        console.log('done Promise: ' + result)
    })
    .catch((error) => console.error('fail Promise: ', error))

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
