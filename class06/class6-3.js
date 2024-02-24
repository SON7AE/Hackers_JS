// 콜백 (콜백함수)
// 함수의 인자(argument)로 사용되는 함수
// 다른 함수를 파라미터로 받아서 내부에서 그것을 호출하고 있습니다.
// 자바스크립트에서는 가능합니다. 그리고 이걸 우리는 “콜백”이라고 하기로 했어요.
// 다른 함수의 파라미터로써 전달되는 함수를 콜백 함수라고 합니다.

const user = {
    id: 1,
    name: '김아무개',
    address: '서울',
    company: '해커스 HRD',
    majors: ['JavaScript'],
}

function timeout(callback) {
    console.log('timeout 함수호출')

    setTimeout(() => {
        callback()
    }, 1000)
}

timeout(function getData() {
    console.log(user)
})
