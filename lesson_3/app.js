let geekStudent = {
    name: "Syimyk",
    surname: "Mambetov",
    telegramUsername: "@Syimyk96",
    age: 21,
    cours: null
}

let phoneBook = {
    Mom: "55555",
    Dad: "66666",
    Sister: "33333",
    Boss: "999999"
};
console.log("call Mom:", phoneBook.Dad);
console.log("Call Sister...", phoneBook["Sister"]);

// Array
let points = [10, 9, 7, 5, 5, 6, 7, 2];
console.log(points.length);
console.log("1st Hw", points[1]);

let total = 0;
total += points[0];
total += points[1];
total += points[3];
total + points[4];

console.log("Total:", total)

//Loops - циклы

for(let point of points){
    //code
    total += point;
}
console.log("Total:", total) 

let operations = [25000, -5000, 500, 6000, -7000];

let incomes = 0;
let experens = 0;

for(let oper of operations){
    if (oper > 0)
    {incomes+= oper;
    }
    else {
        experens += oper;
    }
}
 console.log("доход:", incomes, "расход:", experens);
 