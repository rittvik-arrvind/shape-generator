var button= document.getElementById("button");
var numberInShape=1;
var oldValue=0;

button.onclick=()=>{
    let number=document.getElementById("number").value;
    const circle=document.getElementById("circle")
    const square=document.getElementById("square")
    const rectange=document.getElementById("rectangle")
    const $box=document.getElementById("box")
    var j;
    number=Number(oldValue)+Number(number)
    for(var j=numberInShape;j<=number;j++){
        var shape=document.createElement("div")
        shape.innerHTML+=numberInShape;
        if(square.checked)
        shape.classList.add("square");
        else if(circle.checked)
        shape.classList.add("circle")  ;
        else if(rectangle.checked)
          shape.classList.add("rectangle") ; 
        
          $box.appendChild(shape);
          numberInShape++;
          oldValue=document.getElementById("box").lastElementChild.innerHTML;
    }
}