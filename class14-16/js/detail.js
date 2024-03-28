const logoutBtn = document.querySelector(".page__header__button")
logoutBtn.addEventListener("click", () => {
    location.href = "intro.html"
})

const photoDialog = document.querySelector(".page__dialog")

const widgetPhoto = document.querySelector(".page__body__widget.photo")
widgetPhoto.addEventListener("click", () => {
    photoDialog.classList.add("active")
})

const closeBtn = document.querySelector(".section-left__header__button.red")
closeBtn.addEventListener("click", () => {
    photoDialog.classList.remove("active")
})
