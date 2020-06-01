var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);
}
function keyUp(event) {
  calculateNumeric
}
