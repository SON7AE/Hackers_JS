// 반복문 for

// for문은 널리 쓰이는 패턴을 갖는 루프를 단순화합니다.
// for(initialize; test; increment;){
//    statement
// }

// for (let count = 0; count < 10; count++) {
//     console.log(count)
// }

// for문으로 별찍기
const level = 7

// Step01
for (let i = 1; i <= level; i++) {
    console.log('*')
}

// Step02
for (let i = 1; i <= level; i++) {
    let stars = ''
    // 별 출력 for문
    for (let j = 1; j <= i; j++) {
        // 첫 번째는 *이 1개 출력 => level = 1일 때
        // 두 번째는 *이 3개 출력 => level = 2일 때
        // 세 번째는 *이 5개 출력 => level = 3일 때
        // 네 번째는 *이 7개 출력 => level = 4일 때
        // 다섯 번째는 *이 9개 출력 => level = 5일 때
        stars = stars + '*'
    }

    console.log(stars)
}

// Step03
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
for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].creator)
}
