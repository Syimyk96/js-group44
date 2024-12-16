// task 1

const regExp = /Регулярные выражения/

const containsOnlyDigits = (str) => {
    return /^\d+$/g.test(str)
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false 

// task 2

const time = setInterval(() => {
    // console.log(["Прошла секунда"]);
}, 1000);
setTimeout(() => {
    clearInterval(time)
    
}, 5000);

// task 3

const count = () => {
    let i = 1;
    const interval = setInterval( () => {
        console.log(i);
        i++
        
    }, 1000 );setTimeout(() => {
        clearInterval(interval)
        
    }, 10000);

}
count();

// task 4

const square = document.querySelector(".square");
// square.remove()

square.addEventListener("onclick", () => {
    square.classList.add(".active")
})


