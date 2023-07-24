let para = document.getElementById("myParagraph")
let z = para.textContent.split(" ")

function CheckDuplicate(z){
    z = z.filter((item,index) => z.indexOf(item) === index).join(" ")


    let y = para.textContent
    for(let x of z){
        if(y.matchAll(x)){
            para.textContent = z
            para.style.color = "blue"
        }
    }    
}

console.log(CheckDuplicate(z));