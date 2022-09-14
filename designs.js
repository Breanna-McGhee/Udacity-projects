// Declare variables 
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

//Creates Pixel canvas grid 
function makeGrid() {
    for (var x = 0; x < inputHeight.value; x++) {
        const row = document.createElement('tr')
        for (var y = 0; y < inputWidth.value; y++) {
            const cell = document.createElement('td')
            cell.addEventListener("click", cellColor)
            row.appendChild(cell);
        }
        pixelCanvas.appendChild(row);
    }
}

//Allows cell to change colors based on user color choice 
const cellColor = function (event) {
    event.target.style.backgroundColor = colorPicker.value;
}


//Executes makeGrid() function after user selects Height and Width. Also allows user to hit submit and clear the grid of colors
sizePicker.addEventListener('submit', function (event) {
    pixelCanvas.innerHTML = " ";
    event.preventDefault();
    makeGrid();

});


