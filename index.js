//Clear
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
})
//backspace
document.querySelector("#del").addEventListener("click", ()=> {
    const del = document.querySelector("#display");
    document.querySelector("#display").value = del.value.slice(0,-1);
})
//display /
document.querySelector("#div").addEventListener("click", ()=>{
    document.querySelector("#display").value += "/";
})
//display *
document.querySelector("#multiply").addEventListener("click", ()=>{
    document.querySelector("#display").value += "*";
})
//display -
document.querySelector("#minus").addEventListener("click", ()=>{
    document.querySelector("#display").value += "-";
})
//display +
document.querySelector("#plus").addEventListener("click", ()=>{
    document.querySelector("#display").value += "+";
})
//diplay 7
document.querySelector("#seven").addEventListener("click", ()=>{
    document.querySelector("#display").value += "7";
})
//diplay 8
document.querySelector("#eight").addEventListener("click", ()=>{
    document.querySelector("#display").value += "8";
})
//diplay 9
document.querySelector("#nine").addEventListener("click", ()=>{
    document.querySelector("#display").value += "9";
})
//diplay 6
document.querySelector("#six").addEventListener("click", ()=>{
    document.querySelector("#display").value += "6";
})
//diplay 5
document.querySelector("#five").addEventListener("click", ()=>{
    document.querySelector("#display").value += "5";
})
//diplay 4
document.querySelector("#four").addEventListener("click", ()=>{
    document.querySelector("#display").value += "4";
})
//diplay 3
document.querySelector("#three").addEventListener("click", ()=>{
    document.querySelector("#display").value += "3";
})
//diplay 2
document.querySelector("#two").addEventListener("click", ()=>{
    document.querySelector("#display").value += "2";
})
//diplay 1
document.querySelector("#one").addEventListener("click", ()=>{
    document.querySelector("#display").value += "1";
})
//diplay 0
document.querySelector("#zero").addEventListener("click", ()=>{
    document.querySelector("#display").value += "0";
})
//diplay dot
document.querySelector("#dot").addEventListener("click", ()=>{
    document.querySelector("#display").value += ".";
})

//equal
document.querySelector("#equal").addEventListener("click", ()=>{
    document.querySelector("#display").value = eval(document.querySelector("#display").value) ;
})