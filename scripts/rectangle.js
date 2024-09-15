function rectangleCalculate(){
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    // console.log(length);

    // get width of the rectangle

    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    // console.log(width);
    // // get area of the rectangle 

    const rectArea = length * width;
    console.log(rectArea);

    // // display the input calculate

     const rectangleAreaSpan = document.getElementById('rect-display');
     rectangleAreaSpan.innerText = rectArea;
}

// function rectangleCalculate(){
//     const length = getInputValueById('rectangle-length');
//     console.log(length);
// }


// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById('inputFieldId');
//     const inputValueText = inputField.value;
//     const inputValue = parseFloat(inputValueText);
//     return inputValue;
// }