// 조건문 if, switch

// 조건문은 지정된 표현식의 값에 따라 다른 문을 실행하기도, 실행하지 않기도 합니다.
// 조건문은 코드에서 어떤 것을 결정하는 부분이며, 때때로 분기점(branch)라고 부르기도 하며, 분기처리를 한다고도 합니다.

// 1. if문
// if문은 자바스크립트가 조건에 따라 문을 실행할 수 있게 하는 기본적인 제어문입니다.
// 형태는 아래와 같습니다.
// if (expression) {
//     statment
// }

// 위와 같은 형태에서 expression(표현식)을 평가합니다. 결과값이 true이면 statement(문)을 실행합니다.
// 결과값이 false이면 statement(문)을 실행하지 않습니다.

// 아래와 같은 형태로 쓸 수도 있습니다.
// if (expression) {
//     statment1
// } else {
//     statement2
// }

// expression(표현식)이 많을 경우에 혹은 조건이 많을 경우에는 else-if를 활용합니다.
// if (expression1) {
//     statement1
// } else if (expression2) {
//     statement2
// } else {
//     statement3
// }

// ------------------------------------------------------------------------------------------

function getData(user) {
    if (user.age === 10) {
        console.log(`조회한 유저의 이름은 ${user.name} 이며, 나이는 ${user.age}세 입니다. 청소년층 입니다.`)
    } else if (user.age === 30) {
        console.log(`조회한 유저의 이름은 ${user.name} 이며, 나이는 ${user.age}세 입니다. 청년층 입니다.`)
    } else if (user.age === 50) {
        console.log(`조회한 유저의 이름은 ${user.name} 이며, 나이는 ${user.age}세 입니다. 중장년층 입니다.`)
    }
}

const user1 = {
    name: '김아무개',
    age: 30,
}
const user2 = {
    name: '이아무개',
    age: 50,
}
const user3 = {
    name: '박아무개',
    age: 10,
}

getData(user1)
getData(user2)
getData(user3)

// ------------------------------------------------------------------------------------------

// 2. switch문
// if문은 프로그램 실행 흐름에 분기점을 만들고, else if를 써서 분기점을 여러개 만들 수 있다.
// 하지만 모든 조건이 같은 표현식의 값에 따라 좌우된다면 else if가 최선의 선택이 아닐 수 있는 경우가 있습니다.
// 그래서 이를 대응하기 위해 switch문이 대체할 수 있습니다.

// switch문의 형태는 아래와 같습니다.
// break 대신 return 키워드를 사용해도 됩니다.

// switch (expression) {
//     case 1:
//         // 코드 블록 #1을 실행합니다.
//         break
//     case 2:
//         // 코드 블록 #2를 실행합니다.
//         break
//     default:
//         break
// }

function convert(props) {
    switch (typeof props) {
        case 'string':
            return console.log('전달받은 데이터의 타입은 문자열 입니다.')
        case 'number':
            return console.log('전달받은 데이터의 타입은 숫자 입니다.')
        case 'boolean':
            return console.log('전달받은 데이터의 타입은 불린 입니다.')
    }
}
convert('1')
convert(2)
convert(true)
