const btns = document.querySelectorAll(".btn");
const socialLink = document.querySelector(".social-link");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (socialLink.classList.contains("active")) {
      socialLink.classList.remove("active");
    } else {
      socialLink.classList.add("active");
    }
  });
});
