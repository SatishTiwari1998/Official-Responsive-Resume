
const validateBtn=document.getElementById("validate-btn");
const nameInput=document.getElementById("visitor-name");
const password=document.getElementById("password");
console.log(validateBtn);
console.log("satish");



function validatePassword (){
    if(nameInput.value.length<3 || nameInput.value.length>10)
    {
        alert("Name length should be between 3 to 10 Characters !")
    }
    else
    {
        if(password.value==="abc")
        {
            let sourceCodeBtns=document.getElementsByClassName("source-code");
            for(let i=0;i<sourceCodeBtns.length;i++)
            {
                sourceCodeBtns[i].classList.add("source-code-valid");
                sourceCodeBtns[i].setAttribute("disabled","false");
                console.log(sourceCodeBtns[i]);
            }
            nameInput.innerText="";
            password.innerText="";

        }
        else
        {
            alert("Incorrect Password !")
        }    
    }
}

validateBtn.addEventListener("click",validatePassword);