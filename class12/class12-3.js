// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// 로직이 동일하기 때문에 로직자체를 메모리에 한 번만 만들어서 효율적으로 관리할 수 있다.
// User.prototype.getData = function () {
//     return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다.`
// }

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getData() {
        return `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}세 입니다.`
    }
}

const user4 = new User("김아무개", 30) // 생성자 함수
const user5 = new User("이아무개", 29) // 생성자 함수
const user6 = new User("박아무개", 28) // 생성자 함수

console.log(user4.getData()) // getData 프로토타입 참조
console.log(user5)
console.log(user6)

// ----------------------------------------------------------------------------------------------------
// 클래스의 상속 & 확장

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const user7 = new Person("김아무개", 30)
console.log(user7)

class Person2 extends Person {
    constructor(name, age) {
        super(name, age) // super라는 키워드가 Person 클래스를 그대로 상속해서 사용할 수 있게끔 한다.
    }
}
const user8 = new Person2("이아무개", 29)
console.log(user8)

// ----------------------------------------------------------------------------------------------------

const user9 = new Person2("박아무개", 28)
const user10 = new Person2("송아무개", 27)

class UserData extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
}

const user11 = new UserData("그룹", 26, "React")
const user12 = new UserData("그룹", 26, "Vue.js")

console.log(user11)
console.log(user12)
