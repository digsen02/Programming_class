const numberElement = document.getElementById('number');
const incrementButton = document.getElementById('increment');

let count = 0;

// incrementButton.addEventListener('click', () => {
//     count++;
//     numberElement.textContent = count;
// });


incrementButton.onclick = (increment);

function increment() {
    count++;
    numberElement.textContent = count;
}