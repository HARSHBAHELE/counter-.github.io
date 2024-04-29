// let toggle = document.querySelector(".nav-toggle");
// let links = document.querySelector(".links");

// toggle.addEventListener("click",function() {
//    console.log(links.classList);
//    console.log(links.classList.contains("random"));
//    console.log(links.classList.contains("links"));
//    if (links.classList.contains("show-links")) {
//      links.classList.remove("show-links");
//    } else {
//      links.classList.add("show-links");
//  }
//     links.classList.toggle("show-links");
// });

let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});