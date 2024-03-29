// 얕은복사와 깊은복사

// 복사 : 복사란, 원본을 베낌.
// 얕은복사 : 원래 값과 복사된 값이 같은 메모리 주소를 바라보고 있음을 의미한다.
// 깊은복사 : 얕은 복사처럼 참조 주소 값이 복사되는 것이 아닌, 값만 복사되는 것을 의미한다.
// 원본과의 참조가 완전히 끊어진 것을 의미한다.

// 새롭게 생성된 user가 a라는 메모리에 할당되었다고 하자.
const user = {
    id: 1,
    name: '김아무개',
    address: '서울',
    company: '해커스 HRD',
    majors: ['JavaScript'],
}
const copyUser = user
console.log(user)
console.log(copyUser)
console.log(user === copyUser) // true => 같은 메모리 주소를 바라보고 있다는 것을 의미한다.

user.address = '경기'
console.log('user', user)
console.log('copyUser', copyUser)
// user 객체 데이터의 address 값만 변화시키고자 했는데
// 위 두 콘솔에서 address 값이 둘 다 바뀐 것을 볼 수 있다.
// 그 이유는 user 객체와 copyUser 객체 모두 a라는 메모리를 참조하고 있기 때문이다.

// ----------------------------------------------------------------------------------------------------

const newUser = {
    id: 1,
    name: '김아무개',
    address: '서울',
    company: '해커스 HRD',
    majors: ['JavaScript'],
}
// Object(대상객체, 출처객체)
// 대상객체에 출처객체 데이터를 담아서 새로운 객체 데이터를 반환한다. => 얕은복사(Shallow Copy)
const copyNewUser = Object.assign({}, newUser) // 새로운 메모리에 새로운 데이터가 할당된다.
// const copyNewUser = { ...newUser } // 전개연산자를 통해 얕은 복사 진행 => Object.assign()과 동일한 결과값 반환
console.log(newUser === copyNewUser) // false

newUser.address = '경기'
console.log('newUser', newUser)
console.log('copyNewUser', copyNewUser)

// // ----------------------------------------------------------------------------------------------------

const addedMajor = ['React', 'Vue', 'Angular', 'Svelte']
newUser.majors.push(...addedMajor)

console.log(newUser) // ['JavaScript', 'React', 'Vue', 'Angular', 'Svelte']
console.log(copyNewUser) // ['JavaScript', 'React', 'Vue', 'Angular', 'Svelte']

// 우리가 원했던 건 newUser의 majors 배열에만 추가하길 원했는데
// 다른 메모리 주소를 참조하고 있는 copyUser majors 값도 변한 걸 확인할 수 있다.
console.log(newUser.majors === copyNewUser.majors) // true
// 여기서 newUser.majors === copyNewUser.majors의 값이 true인 이유는 newUser와 copyUser의 객체가 생성된 메모리 자체의 주소는 다르지만
// newUser와 copyNewUser 내 majors라는 데이터 자체는 따로 복사처리를 하지 않았기 때문에 그 값을 같이 공유하고 있기 때문이다.
// 그래서 쉽게 이해하자고 하면, 가장 바깥쪽 껍데기만 복사한다고 이해하시면 됩니다.

// ----------------------------------------------------------------------------------------------------

// lodash 라이브러리 활용하여 deep copy 깊은복사 활용해보기
// <script src="lodash.js"></script>
const deepCloneUser = _.cloneDeep(newUser)

console.log(deepCloneUser)
newUser.majors.push(...addedMajor)
console.log(newUser)
console.log(newUser === deepCloneUser)
