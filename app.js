const socials = document.querySelector(".open-share")
const triangle = document.querySelector(".remove")
const shareBtn = document.getElementById("share")
const removeShareBtn = document.querySelector("#remove-share")

shareBtn.addEventListener("click", () => {
    socials.classList.toggle("clicked")
    triangle.classList.toggle("clicked")
})

removeShareBtn.addEventListener("click", () => {
    socials.classList.remove("clicked")
    triangle.classList.remove("clicked")
})