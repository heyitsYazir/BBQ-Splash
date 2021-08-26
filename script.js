const btn=document.getElementById("btn")
const result=document.getElementById("result")
const input=document.getElementById("input")
const pass=document.getElementById("input2")
btn.addEventListener("click",function(){
    if(input.value==="" && pass.value===""){
        result.textContent="Please enter the following information"
        result.style.color="crimson"
        result.style.fontFamily="roboto"
    }
    else if(input.value===""){
        result.textContent="Please enter both the following information"
        result.style.color="crimson"
        result.style.fontFamily="roboto"
    }
    else if(pass.value===""){
        result.textContent="Please enter both the following information"
        result.style.color="crimson"
        result.style.fontFamily="roboto"
    }
    else{
        result.textContent="Signing up ..."
        result.style.color="darkorange"
        result.style.fontFamily="roboto"
    }
})