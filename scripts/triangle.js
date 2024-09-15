function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value ;
    const base = parseFloat(triangleBaseText);
   
    

    const triangleHightInput = document.getElementById('triangle-hight');
    const triangleHightText = triangleHightInput.value;
    const height = parseFloat(triangleHightText);
   

    const totalArea = .5 * base * height;
    console.log('The area of the triangle',totalArea);


    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = totalArea;
}
