// 구조분해할당
const post = {
    id: 1,
    title: '안녕하세요, 해커스HRD 자바스크립트 기초강좌 입니다.',
    creator: '김아무개',
    createAt: '2024-12-31',
}
// 구조분해할당(객체구조분해)
// post 객체를 구조분해해서 원하는 값는 뽑아서 사용할 수 있도록 한다.
// 속성이 많을 때, 필요한 값만 뽑아 사용할 수 있기 때문에 편리함이 있다.
const { id, title, creator, createAt, position } = post

console.log(`게시글의 id는 ${id} 입니다.`) // post.id
console.log(`게시글의 제목은 ${title} 입니다.`) // post.title
console.log(`게시글의 작성자는 ${creator} 입니다.`) // post.creator
console.log(`게시글의 작성날짜는 ${createAt} 입니다.`) // post.createAt
// 값이 없는 경우에는 undefined가 출력이 된다.
console.log(`게시글의 작성자 직책은 ${position} 입니다.`)

// ------------------------------------------------------------------------------------------

const posts = [
    {
        id: 1,
        title: '안녕하세요, 해커스HRD 자바스크립트 기초강좌 1강 입니다.',
        creator: '김아무개',
        createAt: '2024-12-29',
    },
    {
        id: 2,
        title: '안녕하세요, 해커스HRD 자바스크립트 기초강좌 2강 입니다.',
        creator: '이아무개',
        createAt: '2024-12-30',
    },
    {
        id: 3,
        title: '안녕하세요, 해커스HRD 자바스크립트 기초강좌 3강 입니다.',
        creator: '박아무개',
        createAt: '2024-12-31',
    },
]
// 배열에서의 구조분해할당은 프로퍼티의 이름을 호출하는 것이 아니라 배열의 인덱싱 값을 기준으로 구조분해한다.
// 순서대로 추출하는 것이 중요하다는 점을 꼭 명심하자.
const [item01, item02, item03] = posts
console.log('첫 번째 배열: ', item01)
console.log('두 번째 배열: ', item02)
console.log('세 번째 배열: ', item03)
