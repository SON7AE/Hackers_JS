// 각 Input 태그
const belongTag = document.querySelector('.input.belong')
const userTag = document.querySelector('.input.user')
const contentTag = document.querySelector('.input.content')
const createAtTag = document.querySelector('.input.createAt')

// 버튼 태그
const buttonTag = document.querySelector('.container__footer__button')

// ------------------------------------------------------------------------------------------

let belong = ''
let user = ''
let content = ''
let createAt = ''

belongTag.addEventListener('input', (event) => {
    belong = event.target.value
})
userTag.addEventListener('input', (event) => {
    user = event.target.value
})
contentTag.addEventListener('input', (event) => {
    content = event.target.value
})
createAtTag.addEventListener('input', (event) => {
    createAt = event.target.value
})

// ------------------------------------------------------------------------------------------

buttonTag.addEventListener('click', () => {
    console.log(belong)
    console.log(user)
    console.log(content)
    console.log(createAt)

    // 위 데이터를 객체로 만들어서 로컬스토리지에 담기
})
