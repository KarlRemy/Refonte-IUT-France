let icon = document.getElementById("header");
let body = document.querySelector("body");
icon.addEventListener("click", function (e) {
  e.preventDefault();
  let classes = body.className;
  if (classes === 'with-sidebar') {
    body.className = ''
  } else {
    body.className = 'with-sidebar'
  }
});

function myFunction() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
