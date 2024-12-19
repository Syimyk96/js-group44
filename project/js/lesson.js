// Phone Block;

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/ 

phoneButton.onclick = () => {
    // alert("Ok")
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "Ok"
        phoneResult.style.color = "green";
    } else {
        phoneResult.innerHTML = "Not Ok ";
        phoneResult.style.color = "red"
    }
}

//TAB SLIDER
const tabContentBlock = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');

const hideTabContent = () => {
    tabContentBlock.forEach( item =>{
        item.style.display = 'none';
    })
    tabs.forEach(item =>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (i) => {
    console.log(i = 0 );

}

showTabContent()