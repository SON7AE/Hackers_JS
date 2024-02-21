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

let posts = []

buttonTag.addEventListener('click', () => {
    let post = {
        title,
        user,
        content,
        createAt,
    }

    // 아래 코드를 먼저 작성하여 실행시켜 본 후

    // if (title === '' || user === '' || content === '' || createAt === '') {
    //     window.alert('빈 칸을 채워주세요.')
    // } else if (title !== '' && user !== '' && content !== '' && createAt !== '') {
    //     posts.push(post)
    //     posts.forEach((post, index) => {
    //         post.id = index + 1
    //     })
    //     localStorage.setItem('posts', JSON.stringify(posts))

    //     window.alert('등록이 완료 되었습니다.')
    //     location.href = 'index.html'
    // }

    const addedPosts = JSON.parse(localStorage.getItem('posts'))
    console.log(addedPosts)

    if (addedPosts !== null) {
        // 로컬스토리지 조회 후 이미 posts 배열 데이터가 있으면
        posts = [...addedPosts]

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
    } else {
        // 로컬스토리지 조회 후 이미 posts 배열 데이터가 없으면
        // 아래 데이터를 객체로 만들어서 로컬스토리지에 담기
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
    }
})
