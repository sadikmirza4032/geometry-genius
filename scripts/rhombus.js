function calculateRhombusArea(){
    // Rhombus-long-diagonal
    const rhombusLongDiagonalInput = document.getElementById('long-diagonal');
    const rhombusLongDiagonalText = rhombusLongDiagonalInput.value;
    const longDiagonal = parseFloat(rhombusLongDiagonalText);
    // console.log(longDiagonal);

    // Rhombus-short-diagonal

    const rhombusShortDiagonalInput = document.getElementById('short-diagonal');
    const rhombusShortDiagonalText = rhombusShortDiagonalInput.value;
    const shortDiagonal = parseFloat(rhombusShortDiagonalText);
    // console.log(shortDiagonal);

    // Rhombos Area
    rhombusArea = .5 * longDiagonal * shortDiagonal;
    console.log(rhombusArea);
    // display the input calculate

    const rhombusAreaSpan = document.getElementById('diagonal-display');
    rhombusAreaSpan.innerText = rhombusArea;

}