// gmail_block

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

gmailButton.onclick = () => {
    // alert("Ok")
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "Good";
        gmailResult.style.color = "green";
    } else {
        gmailResult.innerHTML = "NOT OK";
        gmailResult.style.color = "red";
    }

}

//move_block
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
// childBlock.remove()

let positionX = 0;
let positionY = 0;

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock =  () => {
    if (positionX <= maxWidth) {
        positionX++
        // console.log(positionX)
        // moveBlock()
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX >=  maxWidth && positionY <= maxHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()


























