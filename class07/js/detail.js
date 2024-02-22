const bodyEl = document.querySelector('.container__body')
const posts = JSON.parse(localStorage.getItem('posts'))
const selectedIndex = JSON.parse(localStorage.getItem('selectedId'))

bodyEl.innerHTML = `<div class="container__body__info">아래 입력란을 수정해주세요.</div>
<div class="container__body__inputBox">
    <span class="label">제목</span>
    <input type="text" placeholder="제목을 입력하세요." value="${posts[selectedIndex].title}" class="input title" />
</div>
<div class="container__body__inputBox">
    <span class="label">작성자</span>
    <input type="text" placeholder="작성자를 입력하세요." value="${posts[selectedIndex].user}" class="input user" />
</div>
<div class="container__body__inputBox">
    <span class="label">내용</span>
    <input type="text" placeholder="내용을 입력하세요." value="${posts[selectedIndex].content}" class="input content" />
</div>
<div class="container__body__inputBox">
    <span class="label">작성날짜</span>
    <input type="text" placeholder="작성날짜를 입력하세요." value="${posts[selectedIndex].createAt}" class="input createAt" />
</div>`
