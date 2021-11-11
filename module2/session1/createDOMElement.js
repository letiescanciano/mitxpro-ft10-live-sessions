var list = ["one", "two", "three", "four"];

// # is to identify id, . is to identify class
//const numList = document.querySelector('#numList')
const numList = document.getElementById("numList");

for (let i = 0; i < list.length; i++) {
  const createElement = document.createElement("li");
  createElement.textContent = list[i];
  //desButton.innerText.fontsize="50";
  numList.append(createElement);
}

document
  .querySelectorAll("li")
  .forEach((element) => (element.style.color = "red"));
