// 전개연산자 Spread
const users = ['김아무개', '이아무개', '박아무개']

// 강의진행시, 콘솔로 먼저확인해보고 하단의 주석을 작성한다.
console.log(users)
console.log(...users) // => console.log("김아무개", "이아무개", "박아무개")

const newUsers = ['최아무개', '송아무개', ...users, '장아무개']
console.log(newUsers)

function setUsers(user1, user2, ...user3) {
    return {
        user1: user1,
        user2: user2,
        user3: user3,
    }
}
console.log(setUsers('최아무개', '송아무개', ...users))
console.log(setUsers('최아무개', '송아무개', ...users, '장아무개'))

function newSetUsers(user1, user2, ...user3) {
    return {
        user1,
        user2,
        user3,
    }
}
console.log(newSetUsers('최아무개', '송아무개', ...users))
