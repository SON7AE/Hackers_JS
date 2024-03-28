// API 호출에 필요한 정보
const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "mXSaXElt5u9C4xAlm4bVyaiywj9ZRoElzokF0a9_HAU"
const PER_PAGE = 50

let searchValue = "jeju"
let pageValue = 1

// ----------------------------------------------------------------------------------------------------

const dataBoxEl = document.querySelector(".mySwiper")
const searchInput = document.querySelector(".searchBar__input")
const searchBtn = document.querySelector(".searchBar__button")

searchInput.addEventListener("input", (event) => {
    searchValue = event.target.value
})
searchBtn.addEventListener("click", () => {
    getData(searchValue)
})
// 엔터키 조회 기능
searchInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        getData(searchValue)
    }
})

// ----------------------------------------------------------------------------------------------------

async function getData(inputValue) {
    dataBoxEl.innerHTML = "" // 이전 데이터를 비어주고 재렌더링 효과
    // call unsplash api
    try {
        const res = await axios.get(`${API_URL}?query=${inputValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)

        console.log(res.data.results[0])
        res.data.results.forEach((image) => {
            dataBoxEl.innerHTML += `<swiper-slide>
                <div class="album">
                    <img src="${image.urls.full}" alt="" class="album__image" />
                    <div class="album__infoBox">
                        <div class="album__infoBox__row">
                            <span class="albumLabel">이미지 크기</span>
                            <span class="value">${image.width} X ${image.height}</span>
                        </div>
                        <div class="album__infoBox__row">
                            <span class="albumLabel">좋아요</span>
                            <span class="value">${image.likes}개</span>
                        </div>
                        <div class="album__infoBox__row">
                            <span class="albumLabel">작성자</span>
                            <span class="value">${image.user.name}</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>`
        })

        return res
    } catch (error) {
        console.log(error)
    }
}

getData("jeju")
