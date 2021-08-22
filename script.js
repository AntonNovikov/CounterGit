let count = 0;
const countH = document.querySelector("#counter");
const increseBtn = document.querySelector(".increase");
const decreseBtn = document.querySelector(".decrease");

increseBtn.addEventListener("click", changeCount);
decreseBtn.addEventListener("click", changeCount);

function changeCount(e) {
  if (e.path[0].className === "increase") {
    num = 1;
  } else {
    num = -1;
  }

  count += num;

  countH.textContent = count;
}
