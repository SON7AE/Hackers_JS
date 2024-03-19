// 비동기 - 예외처리

// Promise일 경우에는 .then().catch()
// async-await 경우에는 try - catch

let valid = false

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valid) {
                console.log("특정조건 이행")
                resolve("SUCCESS")
            } else {
                console.log("특정조건 불이행")
                reject("FAIL")
            }
        }, ms)
    })
}

// try {
//     console.log("실행")
//     delay(3000)
// } catch (error) {
//     console.log(error)
// }

// delay(3000)
//     .then((result) => {
//         console.log("done Promise: " + result)
//     })
//     .catch((error) => console.error("fail Promise: ", error))

// async function main() {
//     try {
//         console.log("호출")
//         // return 하는 것처럼 보인다.
//         const result = await delay(5000) // 실제로 동작은 비동기로 하지만, 코드적으로 봤을 땐 동기처럼 동작하는 것처럼 보이게 하는 것이 async / await 오퍼레이터를 붙여주는 것이다.
//         console.log("done async", result)
//     } catch (error) {
//         console.error("fail async", error) // reject는 예외구문에서 걸린다. 항상 await을 try - catch로 감싸서 코드를 작성하면 성공은 try쪽에서 실패는 catch쪽에서 처리된다.
//     }
// }

// main()
