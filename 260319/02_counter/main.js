const numberElement = document.getElementById("number")

let count = 0;

numberElement.innerHTML = count;
function calc(num) {
    count += num;
    numberElement.innerHTML = count;
}