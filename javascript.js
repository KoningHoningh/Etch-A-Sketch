//creates buttons to make different colors possible:
// Red:
var paintColor = "Red" //The color red
const colorButtons = document.createElement("div")
const redButton = document.createElement("button")
redButton.innerHTML = "Red";
redButton.addEventListener("click", function() {
    paintColor = "red"
})
colorButtons.appendChild(redButton);

//Blue:
const blueButton = document.createElement("Button")
blueButton.innerHTML = "Blue";
blueButton.addEventListener("click", function (){
    paintColor = "blue"
})
colorButtons.appendChild(blueButton)

//Green:
const greenButton = document.createElement("Button")
greenButton.innerHTML = "Green";
greenButton.addEventListener("click", function() {
    paintColor = "green"
})
//Add them to their own div
colorButtons.appendChild(greenButton)
//Add the div to the body
document.body.appendChild(colorButtons);

//Creates the main container for all the blocks to go into
var container = document.createElement("div")
container.className = "container"
document.body.appendChild(container);
var button = document.createElement("button");



function getBoard(rows, columns) {


const width = Math.round((600 / rows)) - 2 + "px" // Determines the size of the boxes
const height = Math.round((600 / columns)) - 2 + "px" //Determines the size of theboxes

for (var i = 0; i < rows; i++) //iterates 16 times to paste the column.
{
    const box = document.createElement("div"); //The container where to put the grid in.
    box.className = "box"; // Adds the class to the container
    
    for (var j = 0; j < columns; j++) //iterates through the amount of columns to create that amount of
    {
        const square = document.createElement("div"); //Creates square that the grid will be filled with
        square.className = "square"; //Creates a class for the square to manipulate.
        square.style.width = width;
        square.style.height = height;
        box.style.display = "inline-block"; //changes the alignment to make it a column
        console.log(square);


        box.appendChild(square); //creates the column.
    }
    container.appendChild(box); //Adds the column in the nth row.
    
    var gridPixels = container.querySelectorAll('div'); //Adds functionality to color the cells
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}}


//The functionality to color the cells.
function colorGrid()
{
    this.style.backgroundColor = paintColor;
}

function newGameButton() 
{
    
    button.innerHTML = "New Game";
    button.className = "button";
    button.style.margin = "200px";
    document.body.appendChild(button);

}


getBoard(16, 16, container);
newGameButton()
button.addEventListener("click", function() {
    container.innerHTML = "";
    var rows = prompt("Please insert amount of rows, less than 100.");
    while (rows === "" || !Number.isInteger(parseInt(rows)) || rows > 100)
    {
        rows = prompt("Please instert amount of rows in a number below 100");
    }
    var columns = prompt("Please insert amount of columns less than 100")
    while (columns === "" || !Number.isInteger(parseInt(columns)) || columns > 100)
    {
        columns = prompt("Please insert amount of columns in a number below 100");
    }

getBoard(rows, columns);
})

