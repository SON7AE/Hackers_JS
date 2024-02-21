// 각 Input 태그
const titleTag = document.querySelector('.input.title')
const userTag = document.querySelector('.input.user')
const contentTag = document.querySelector('.input.content')
const createAtTag = document.querySelector('.input.createAt')

// 버튼 태그
const buttonTag = document.querySelector('.container__footer__button')

// ------------------------------------------------------------------------------------------

let title = ''
let user = ''
let content = ''
let createAt = ''

titleTag.addEventListener('input', (event) => {
    title = event.target.value
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

const posts = []

buttonTag.addEventListener('click', () => {
    // 위 데이터를 객체로 만들어서 로컬스토리지에 담기
    const post = {
        title,
        user,
        content,
        createAt,
    }

    if (title === '' || user === '' || content === '' || createAt === '') {
        window.alert('빈 칸을 채워주세요.')
    } else if (title !== '' && user !== '' && content !== '' && createAt !== '') {
        posts.push(post)
        posts.forEach((post, index) => {
            post.id = index + 1
        })
        localStorage.setItem('posts', JSON.stringify(posts))

        window.alert('등록이 완료 되었습니다.')
        location.href = 'index.html'
    }
})
