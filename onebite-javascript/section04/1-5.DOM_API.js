let $button = document.createElement("button");
$button.id = "new-button";
$button.classList.add("new-button");
$button.textContent = "버튼";

let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($button);

console.log($animalInfo);

/* -------------------------------------------------------------------------- */
/*                              addEventListener                              */
/* -------------------------------------------------------------------------- */
$button.addEventListener("click", () => {
  window.alert("클릭됨!");
});

/* -------------------------------------------------------------------------- */
/*                                  innerHTML                                 */
/* -------------------------------------------------------------------------- */

let $animalInfo2 = document.querySelector("div.animal-info");
$animalInfo2.innerHTML = '<div id="name">고양이</div>';
// console.log($animalInfo2.innerHTML);
console.log($animalInfo2);
