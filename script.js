window.onload = getAnimationName();

function getAnimationName() {
  document.getElementById("detail_elements").style.visibility = "visible";

  const e = document.querySelector("#target");
  const select = document.querySelector("#animationSelect");
  e.className = "title";
  let value = select.options[select.selectedIndex].value;
  let text = select.options[select.selectedIndex].text;
  let dataLink = select.options[select.selectedIndex].dataset.link;
  let strArray = text.split("-");
  let animationName = document.querySelector("#animationName");
  let userName = document.querySelector("#userName");
  animationName.textContent = strArray[0];
  userName.textContent = strArray[1];
  userName.href = dataLink;
  e.classList.add(value);
}
