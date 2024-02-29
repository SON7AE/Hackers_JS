// 1-1차시
// 자바스크립트란 무엇인가?
// JavaScript는 웹 페이지에서 복잡한 기능을 구현할 수 있는 스크립팅 또는 프로그래밍 언어입니다.
// 자바스크립트로 작성한 프로그램을 스크립트(script) 라고 부릅니다. 스크립트는 웹페이지의 HTML 안에 작성할 수 있는데, 웹페이지를 불러올 때 스크립트가 자동으로 실행됩니다.

// 사용자는 컴퓨터에서 웹에 접근 => 서버에 최초 요청(Request) => 최초 응답(Response) 기본적인 구조를 담은 HTML이 응답으로 전달된다. => 추가 요청(CSS, JS, 이미지, 동영상 등) => 추가 응답
// 이때 화면이 그려지는 작업을 렌더링이라고 하고, 그 렌더링이 완료된 화면을 사용자가 보고 느끼는 것입니다.

// 1-3차시
// 자바스크립트 선행
console.log("Hello World!")

// 자료형
// 웹을 구성하는 자바스크립트 같은 경우에는 모든 것들이 데이터로 통제가 되기 때문에
// 사고방식을 눈에 보이지 않는 데이터 기준으로 사고해야합니다.
// 따라서, 데이터의 종류에는 크게 두 가지의 타입이 있습니다.
// 하나는 기본타입, 다른 하나는 객체타입 입니다.

// 1. 기본타입에는 문자열, 숫자, 불(boolean) 타입이 있습니다. 추가적으로 자바스크립트 특별한 값 중 null과 undefined가 있는데
// 이는 기본타입에 해당하지만, 문자열 숫자 불 타입에 속하지 않기 때문에 그 타입 자체로 취급해도 무방합니다.
// 따라서 기본타입에는 문자열, 숫자, 불 / null, undefined가 있다고 이해하시면 됩니다.

// ----------------------------------------------------------------------------------------------------

// 1. 문자열 string (텍스트)
// 문자열 데이터를 만드는 방법은 큰 따옴표, 작은 따옴표, 백틱(``)으로 문자를 감싸면 됩니다.
let typeString = "HACHKERS HRD" // 큰 따옴표 혹은 작은 따옴표 둘 다 사용해도 무방
console.log(typeof typeString, typeString)

// 2. 숫자
// 숫자 데이터를 만드는 방법
let typeNumber = 123
console.log(typeof typeNumber, typeNumber)

// 3. 불(boolean)
// true, false 두 가지 값만 존재하는 논리데이터
let valueIsTrue = true
let valueIsFalse = false
console.log(typeof valueIsTrue, valueIsTrue)
console.log(typeof valueIsFalse, valueIsFalse)

// 4. null
// 어떤 값이 의도적으로 비어있음을 의미, 여기서 key point는 '의도적으로' 입니다.
// null은 값이 없음을 나타날 때 사용하는 특별한 값
let empty = null
console.log(typeof empty, empty)

// null의 타입은 object를 반환하는데, 이를 미루어 볼 때, null은 '객체가 없다.'는 것을 의미합니다.
// 여기서 객체는 아래와 같다.
let obj = {
    userName: "HACKERS HRD",
    userPhone: "010-1234-5678",
}
console.log(typeof obj, obj)
// 하지만 null은 해당 타입의 유일한 멤버로 인식되며, 객체뿐만 아니라 숫자나 문자열에도 '값이 없다'는 의미로 사용될 수 있다.

// 5. undefined
// 값이 할당되지 않은 상태를 나타내는 특별한 값
let undef
console.log(typeof undef, undef)
console.log(obj.userEmail)

// ----------------------------------------------------------------------------------------------------

// 6. object (객체데이터 & 배열데이터)

// 6.1 객체데이터
// 객체는 복합된 값입니다. 객체는 여러가지 값을 모아서 이름을 통해 값을 저장하고 가져올 수 있게 합니다.
// 즉, 키-벨류(key: value) 형태로 저장합니다.
let userInfo = {
    name: "HACKERS HRD",
    age: 30,
    major: "Computer Programming",
    email: "abc@test.com",
    married: false,
}

console.log(typeof userInfo, userInfo)
console.log(typeof userInfo.name, userInfo.name)
console.log(typeof userInfo.age, userInfo.age)
console.log(typeof userInfo.major, userInfo.major)
console.log(typeof userInfo.email, userInfo.email)
console.log(typeof userInfo.married, userInfo.married)

// 6.2 배열데이터
// 배열은 값의 순서가 있는 집합이다. 여러 데이터를 순차적으로 저장하며
// 배열 요소는 어떤 타입이든 상관없고, 배열 하나에 여러 타입이 섞여 있어도 괜찮다.
// 배열 요소에 객체나 다른 배열을 써도 상관없으므로 복잡한 데이터 구조를 만들 수 있다.
let user = ["John", "Kim", "Lee", "Park"]
let complex = [123, "john", true, userInfo]

console.log(typeof user, user)
console.log(typeof complex, complex)

// ----------------------------------------------------------------------------------------------------

// DOM API
// DOM은 Document Object Model의 약자로 div, span, input 태그 등 HTML 요소들을 의미하며
// API는 Application Programming Interface의 약자로 웹 사이트가 동작하기 위해서 입력하는 프로그래밍 명령이라고 이해하시면 됩니다.
// 따라서 DOM API는 HTML 요소를 통제하기 위한 자바스크립트 내장함수라고 이해하시면 됩니다.

// let layoutEl = document.querySelector('.layout')
// console.log(layoutEl)

// HTML 요소(Element) 1개 할당 (가장 먼저 찾아내는 딱 하나)
let layoutEl = document.querySelector(".layout")

// HTML 요소에 적용할 수 있는 메서드
// layoutEl.addEventListener()

// 인수(Arguments)를 추가
// layoutEl.addEventListener('첫 번째 자리', '두 번째 자리')

// 1 - 이벤트(Event, 상황)
// layoutEl.addEventListener('click', '두 번째 자리')

// 2- 핸들러(Handler, 실행할 함수)
layoutEl.addEventListener("click", function () {
    console.log("Click!")
})

// ----------------------------------------------------------------------------------------------------

const boxEl = document.querySelector(".box")
console.log(boxEl)

boxEl.addEventListener("click", function () {
    console.log("클릭이벤트가 발생하였습니다.")
})

// 요소의 클래스 정보객체 활용
// class 추가
boxEl.classList.add("active")
let isCheck = boxEl.classList.contains("active")

console.log(isCheck) // true

// 요소의 클래스 정보객체 활용
// class 제거
boxEl.classList.remove("active")
isCheck = boxEl.classList.contains("active")

console.log(isCheck) // false

// ----------------------------------------------------------------------------------------------------

// HTML 요소(Elemnt) 모두 찾기
const boxEls = document.querySelectorAll(".box")
console.log(boxEls)

// 찾은 요소들 반복해서 함수 실행
// 익명 함수를 인수로 추가
boxEls.forEach(function () {})

// 첫 번째 매개변수(boxEl): 반복 중인 요소
// 두 번째 매개변수(index): 반복 중인 번호
boxEls.forEach(function (boxEl, index) {})

// 실행 및 출려
boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`list-${index + 1}`)
    console.log(index, boxEl)
})

// ----------------------------------------------------------------------------------------------------

// Getter, 값을 얻는 용도
console.log(boxEl.textContent)

// Setter, 값을 지정하는 용도
boxEl.textContent = "HACKERS HRD"
console.log(boxEl.textContent)
