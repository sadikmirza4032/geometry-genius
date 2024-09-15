function calculateParallelogramArea() {
   const parallelogramBaseInput = document.getElementById('parallelogram-base');
   const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    
    const parallelogramArea = base * height;
    console.log(parallelogramArea);


    const parallelogramSpanArea = document.getElementById('parallelogram-span');
    parallelogramSpanArea.innerText = parallelogramArea;
}