// function

// 1.宣告式
function getNumber1() {
    return 1;
}

// 2.表達式
const x = 1;
const getNumber2 = function () {
    return 2;
}

// 3.箭頭函式
const getNumber3 = () => {
    return 3;
}

console.log(getNumber1());
console.log(getNumber2());
console.log(getNumber3());