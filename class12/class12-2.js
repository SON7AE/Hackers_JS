// this
// 일반함수는 호출 위치에 따라 this를 정의
// => function 키워드를 사용한 함수

// 화살표함수는 자신이 선언된 함수 범위에서 this를 정의

const name = '박아무개'

const user1 = {
    name: '김아무개',
    declare: function () {
        console.log(this.name)
    },
    express: () => {
        console.log(this.name)
    },
}

user1.declare() // "김아무개"
user1.express() // undefined

// ------------------------------------------------------------------------------------------

const user2 = {
    name: '이아무개',
    declare: user1.declare,
    express: user1.express,

    test: function () {
        const test2 = () => {
            console.log(this.name)
        }
        test2()
    },
}
user2.declare() // "이아무개"
user2.express() // undefined
user2.test() // "이아무개"

// ------------------------------------------------------------------------------------------

// 생성자 함수에서 this 정의하기

function User(name) {
    this.name = name
}

User.prototype.declare = function () {
    console.log(this.name)
}
User.prototype.express = () => {
    console.log(this.name)
}

const user3 = new User('박아무개')
user3.declare() // "박아무개"
user3.express() // undefined

// ------------------------------------------------------------------------------------------

const timer = {
    name: '최아무개',
    timeout1: function () {
        setTimeout(function () {
            console.log(this.name)
        }, 1000)
    },
    timeout2: function () {
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    },
}
timer.timeout1() // undefined
timer.timeout2() // 최아무개

// 결국 우리는 function 함수와 화살표 함수를 잘 구분해서 사용해야한다.
