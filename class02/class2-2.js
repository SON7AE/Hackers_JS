// 변수선언과 데이터할당
let userName = 'Park'
console.log(userName) // Park

function introduce(name) {
    const frame = `안녕하세요, 제 이름은 ${name} 입니다.`
    console.log(frame)
    return frame
}
introduce(userName)
introduce('Kim')
introduce('Lee')

// ----------------------------------------------------------------------------------------------------

const COMPANYNAME = '해커스 HRD'

function education(name) {
    const frame = `안녕하세요, 교육의 메카 ${name} 입니다.`
    console.log(frame)
    return frame
}
education(COMPANYNAME)

COMPANYNAME = '새로운 회사' // TypeError: Assignment to constant variable.
// const는 재할당을 허용하지 않음
education(COMPANYNAME)
