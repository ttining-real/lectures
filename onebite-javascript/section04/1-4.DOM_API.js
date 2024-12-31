/* -------------------------------------------------------------------------- */
/*                                createElement                               */
/* -------------------------------------------------------------------------- */

let $type = document.createElement("div");

$type.className = "info-item";
$type.id = "type";
// $type.textContent = "말티즈";

let $typeText = document.createTextNode("말티즈");

console.log($type);
console.log($typeText);

/* -------------------------------------------------------------------------- */
/*                                 appendChild                                */
/* -------------------------------------------------------------------------- */
let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($type);
$type.appendChild($typeText);

console.log($type);
console.log($typeText);

console.log($animalInfo);
