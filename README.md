#### class14-16 👉🏻 js 👉🏻 detail.js 코드 수정

```
const getWeather = async () => {
    const API_KEY = "284bfdeb630520653864189833ba7c68";
    const lat = 37.5683;
    const lon = 126.9778;
    let weatherIcon = "";

    try {
        // const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`); // 기존 API 호출 주소
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`); // 새롭게 변경된 API 호출 주소

        console.log(res); // => res.data.current 삭제
        weatherIcon = res.data.weather[0].icon;

        // res.data.current.weather[0].description => res.data.weather[0].description
        headerEl.innerHTML = `
            <button class="page__header__button" onclick="back()">
                <span class="material-symbols-outlined">logout</span>
                로그아웃
            </button>
            <div class="page__header__profile">
                <img src="./assets/images/profile.jpeg" alt="" class="image" />
                <span class="name">해커스HRD</span>
                <img src="./assets/images/${weatherIcon}.png" alt="" class="image" />
                <span class="name">${res.data.weather[0].description}</span> 
                <span class="date">${dayjs(new Date()).format("YYYY-MM-DD")}</span>
            </div>`;
    } catch (error) {
        console.log(error);
    }
};
getWeather();
```
