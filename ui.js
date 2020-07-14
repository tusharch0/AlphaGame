// I really do not like to not have a template.
// I have to write these games all from scratch.

document.querySelectorAll(".btn-play").forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector(".game").style.display = "block";
        document.querySelectorAll(".page").forEach(el => el.style.display = "none");
        document.body.style.overflow = "hidden";
        started = true;
    })
})

document.querySelector(".btn-restart").addEventListener("click", () => location.reload())

document.querySelector(".high-score").innerHTML = localStorage.getItem("hscore");

document.querySelector(".btn-how").addEventListener("click", () => {
    document.querySelectorAll(".page").forEach(el => el.style.display = "none");
    document.querySelector(".help").style.display = "block";
})