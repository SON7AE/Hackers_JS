// OpenWeatherAPI 호출

const getWeather = async () => {
    const API_KEY = "284bfdeb630520653864189833ba7c68"
    const lat = 37.5683
    const lon = 126.9778
    let weatherIcon = ""

    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        weatherIcon = res.data.current.weather[0].icon
        console.log(res)

        headerEl.innerHTML = `
            <button class="page__header__button" onclick="back()">
                <span class="material-symbols-outlined">logout</span>
                로그아웃
            </button>
            <div class="page__header__profile">
                <img src="./assets/images/profile.jpeg" alt="" class="image" />
                <span class="name">해커스HRD</span>
                <img src="./assets/images/${weatherIcon}.png" alt="" class="image" />
                <span class="name">${res.data.current.weather[0].description}</span>
                <span class="date">${dayjs(new Date()).format("YYYY-MM-DD")}</span>
            </div>`
    } catch (error) {
        console.log(error)
    }
}
getWeather()

// ------------------------------------------------------------------------------------------

const headerEl = document.querySelector(".page__header")
const logoutBtn = document.querySelector(".page__header__button")
const photoDialog = document.querySelector(".page__dialog")
const widgetPhoto = document.querySelector(".page__body__widget.photo")
const closeBtn = document.querySelector(".section-left__header__button.red")

// ------------------------------------------------------------------------------------------

const back = () => {
    location.href = "intro.html"
}

widgetPhoto.addEventListener("click", () => {
    photoDialog.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    photoDialog.classList.remove("active")
})
