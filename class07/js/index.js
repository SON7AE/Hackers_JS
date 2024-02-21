const createBtn = document.querySelector('.container__footer__button')
const bodyEl = document.querySelector('.container__body')

createBtn.addEventListener('click', () => {
    // 생성하기 페이지로 이동
    location.href = 'create.html'
})

// 로컬스토리지에 있는 데이터를 기준으로 List UI 추가
const posts = JSON.parse(localStorage.getItem('posts'))
console.log(posts)

if (posts === null) {
    bodyEl.innerHTML = `<div class="container__body__noData">
        <span>등록된 게시물이 없습니다.</span>   
    </div>`
} else {
    posts.forEach((post, index) => {
        bodyEl.innerHTML += `<div class="container__body__list">
            <span class="id">게시물 번호: NO.${post.id}</span>
            <span class="title">제목: ${post.user}</span>
            <span class="content">내용: ${post.content}</span>
            <span class="createAt">작성날짜: ${post.createAt}</span>
            <button class="btn-update">상세보기</button>
        </div>`
    })
}
