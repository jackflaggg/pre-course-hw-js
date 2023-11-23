const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(item => item === "черный" || item === "красный" || item === "желтый");
}

console.log(createColorString().join('-'));
