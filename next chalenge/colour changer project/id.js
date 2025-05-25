const button=document.querySelectorAll('.box');
const body=document.querySelector("body");

button.forEach(function(box) {
    box.addEventListener("click",function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = "red"
        }
    })
});