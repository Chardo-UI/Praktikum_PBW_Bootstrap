document.getElementById("dark_mode").onclick = function() {
    document.getElementById("hero").classList.remove("bg-danger-subtle");
    document.getElementById("hero").classList.add("text-bg-secondary");
    document.getElementById("article").classList.add("text-bg-dark");
    document.getElementById("footer").classList.add("text-bg-dark");
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card-body")[i].classList.add("text-bg-secondary");
    }
    document.getElementById("gallery").classList.remove("bg-danger-subtle");
    document.getElementById("gallery").classList.add("text-bg-secondary");
    document.getElementsByClassName("bi-twitter-x")[0].classList.remove("text-dark");
    document.getElementsByClassName("bi-twitter-x")[0].classList.add("text-light");
}

document.getElementById("light_mode").onclick = function() {
    document.getElementById("hero").classList.remove("text-bg-secondary");
    document.getElementById("hero").classList.add("bg-danger-subtle");
    document.getElementById("article").classList.remove("text-bg-dark");
    document.getElementById("footer").classList.remove("text-bg-dark");
    for (let i = 0; i < document.getElementsByClassName("card").length; i++) {
        document.getElementsByClassName("card-body")[i].classList.remove("text-bg-secondary");
    }
    document.getElementById("gallery").classList.remove("text-bg-secondary");
    document.getElementById("gallery").classList.add("bg-danger-subtle");
    document.getElementsByClassName("bi-twitter-x")[0].classList.add("text-dark");
    document.getElementsByClassName("bi-twitter-x")[0].classList.remove("text-light");
}