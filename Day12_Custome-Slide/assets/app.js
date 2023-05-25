const range = document.querySelector(".range");
const process = document.querySelector(".process");
const value = document.querySelector(".process span");

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;
}

range.addEventListener("mousemove", function (e) {
  let processWidth = e.pageX - this.offsetLeft;
  let percent = (processWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);
  updateProcess(percent);
});
