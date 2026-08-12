const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
    alert(cat);
}

function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);
console.log(upperCats);

function lCat(cat) {
    return cat.startsWith("L");
}

const filtered = cats.filter(lCat);
console.log(filtered);