// 반복문 for-in / for-of / forEach

// 1. for-in
// for-in 객체 데이터일 경우에만 사용할 수 있는 반복문입니다.
const post = {
    id: 3,
    title: '안녕하세요, 해커스HRD 자바스크립트 기초강좌 3강 입니다.',
    creator: '박아무개',
    createAt: '2024-12-31',
}
for (property in post) {
    // console.log(property)
    // console.log(post[property])
    console.log(property + ': ' + post[property])
}
for (key of Object.keys(post)) {
    console.log(post[key])
}

// 2. for-of
// for-of은 배열 데이터일 경우에만 사용할 수 있는 반복문입니다.
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
for (let post of posts) {
    console.log(post)
    console.log(post.creator)
}

// 3. forEach
// forEach 메서드는 배열을 순회하며 각 요소에서 함수를 호출합니다.
// forEach 메서드의 첫 번째 인자는 함수입니다.
// forEach 메서드의 첫 번째 인자의 첫 번째 인자는 배열 요소의 값
// forEach 메서드의 첫 번째 인자는 두 번째 인자는 배열 요소의 인덱스입니다.
// forEach 메서드의 첫 번째 인자는 세 번째 인자는 배열 그 자체입니다.

posts.forEach((post, index, array) => {
    // console.log(post)
    // console.log(index)
    // console.log(array)

    post.id = 100
})
console.log(posts)

const res = posts.map((post, index, array) => {
    return post
})
console.log(res)
console.log(posts)
console.log(res === posts)
