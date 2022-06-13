// Creates a grid 16 by 16



for (var i = 0; i < 16; i++) //iterates 16 times to create the 16 rows.
{
    const container = document.createElement("div"); //The container where to put the grid in.
    container.className = "container"; // Adds the class to the container
    
    for (var j = 0; j < 16; j++) //iterates 16 times to create the 16 columns
    {
        const square = document.createElement("div"); //Creates square that the grid will be filled with
        square.className = "square"; //Creates a class for the square to manipulate.
        square.style.width = "38px"; // Sized height to 38 making the total height 40px due to border
        square.style.height ="38px"; // Sized width to 38 making the total width 40px due to border
        
        if ((i+j)%2 === 0) // Creates a checkerboard design.
        {square.style.background = "white";} // Adds a color to the background.
        else 
        {square.style.background = "black";} // Adds a color to the background.

        square.style.border = "1px solid black" // Creates the border of 1 px wide, solid and black.
        container.style.display = "inline-block"; //changes the alignment to make it a row
        container.appendChild(square); //creates the row.
    }
    document.body.appendChild(container); //Adds the row.
}



