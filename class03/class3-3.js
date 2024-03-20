// 객체
// 객체는 복합된 값입니다.

// 객체생성
// 객체를 생성할 때는 객체 리터럴, new 키워드 또는 Object.create() 함수를 사용합니다.

// 1. 객체 리터럴
// 객체를 생성하는 가장 쉬운 방법은 객체 리터럴입니다.
// 객체 리터럴의 가장 단순한 형태는 클론으로 구분한 이름: 값(key: value)쌍을 콤마로 구분해 중괄호로 감싼 형태입니다.
let empty = {} // 프로퍼티가 없는 객체
let point = { x: 0, y: 0 }

// 2. new 연산자
// new 연산자는 새 객체를 생성하고 초기화합니다.
// new 키워드 뒤에는 반드시 함수호출이 있어야 합니다.
let obj = new Object() // 빈 객체를 만듭니다. {}
let arr = new Array() // 빈 배열을 만듭니다. []

// 3. 프로토타입

// 4. Object.create()
// Object.create()는 첫 번째 인자를 프로토타입 삼아 새 겍체를 생성합니다.
let newObj = Object.create({ x: 1, y: 2 })
console.log(newObj)
console.log(newObj.x + newObj.y) // 3 => newObj는 x와 y의 프로퍼티를 상속합니다.

// {} 혹은 new Object()가 반환하는 것처럼 일반적인 빈 객체를 만들고 싶을 때는 다음과 같이 Object.prototype을 전달합니다.
let newObj2 = Object.create(Object.prototype)
console.log(newObj2)

// 5. 프로퍼티 검색과 설정
// 프로퍼티 값에 접근할 때는 점(.)이나 대괄호([]) 연산자를 사용합니다.
// let author = book.author
// let name = author.surname
// let title = book['book_title']

// object.property = object["property"]

// 6. 분해연산자
let position = { x: 0, y: 0 }
let dimensions = { width: 100, height: 100 }
let rect = { ...position, ...dimensions }
console.log(rect)
