function calculateArea(){
    const ellipsisMajorAxisInput  = document.getElementById('ellipsis-major-axis-length');
    const ellipsisMajorText = ellipsisMajorAxisInput.value;
    const majorAxis = parseFloat(ellipsisMajorText);
    console.log(majorAxis);

    const ellipsisMinorAxisInput  = document.getElementById('ellipsis-minor-axis-length');
    const ellipsisMinorText = ellipsisMinorAxisInput.value;
    const minorAxis = parseFloat(ellipsisMinorText);
    console.log(minorAxis);

    const ellipsisArea = 3.1416 * majorAxis * minorAxis;
    console.log(ellipsisArea);

    const ellipsisSpam = document.getElementById('ellipsis-display');
    ellipsisSpam.innerText = ellipsisArea;
}