const createBtn = document.querySelector('.container__footer__button')
const bodyEl = document.querySelector('.container__body')

createBtn.addEventListener('click', () => {
    // 생성하기 페이지로 이동
    location.href = 'create.html'
})

// ------------------------------------------------------------------------------------------

// 로컬스토리지에 있는 데이터를 기준으로 List UI 추가
const posts = JSON.parse(localStorage.getItem('posts'))
const postIds = []

if (posts === null) {
    bodyEl.innerHTML = `<div class="container__body__noData">
        <span>등록된 게시물이 없습니다.</span>   
    </div>`
} else {
    posts.forEach((post) => {
        bodyEl.innerHTML += `<div class="container__body__list">
            <span class="id">게시물 번호: NO.${post.id}</span>
            <span class="title">제목: ${post.user}</span>
            <span class="content">내용: ${post.content}</span>
            <span class="createAt">작성날짜: ${post.createAt}</span>
            <button class="btn-update">상세보기</button>
        </div>`
        postIds.push(post.id)
    })
}
localStorage.setItem('ids', JSON.stringify(postIds))

// ------------------------------------------------------------------------------------------

// 각각의 게시물 클릭
const buttons = document.querySelectorAll('.btn-update')
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        localStorage.setItem('selectedId', JSON.stringify(index))

        // 상세보기 페이지로 이동
        location.href = 'detail.html'
    })
})
