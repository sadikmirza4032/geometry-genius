function calculatePentagonArea(){
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const Perimeter = parseFloat(pentagonPerimeterText);
   


    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText);
    

    const totalPentagon = .5 * Perimeter * base;
    console.log(totalPentagon);

    pentagonSpan = document.getElementById('pentagon-display');
    pentagonSpan.innerText = totalPentagon;

}