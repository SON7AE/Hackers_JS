// 1. 문자열 string (텍스트)
// 문자열 데이터를 만드는 방법은 큰 따옴표, 작은 따옴표, 백틱(``)으로 문자를 감싸면 됩니다.
let userName = 'HACHKERS HRD' // 큰 따옴표 혹은 작은 따옴표 둘 다 사용해도 무방
let phone = '010-1234-5678'
let introduction = `Hello, My name is ${userName}. My phone number is ${phone}`

console.log(typeof userName, userName)
console.log(typeof phone, phone)
console.log(typeof introduction, introduction)

// 2. 숫자
// 숫자 데이터를 만드는 방법
let number = 123
let float = 1.23
let stringNumber = '123'

console.log(typeof number, number)
console.log(typeof float, float)
console.log(typeof stringNumber, stringNumber)
