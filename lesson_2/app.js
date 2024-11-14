
console.log ("lesson 2");


// varibless - переменные
// let, const, var

let purchaseAamount = 1500;
let discountInPersents = 40; 


purchasAamount = 1800;
let discountCoef = (100 - discountInPersents) /100; //0.6
let purchasAamountWithDiscount = purchasAamount * discountCoef;




// comparing operators - 
// > < >= <== 

let productQantinity =0;
let productAvailable = productQantinity > 0;

// conditions - 
if(productAvailable){
    console.error("Product out of stock");
} else if(productAvailable <10){
    console.warn("few items available. hurry up to purchase!!");

}

// data types - типы данных

// 1. number - числовой
// 2. string - текстовый
// 3. boolean -  логический (булевый)
// 4. underined -
// 5. null

let clientBirthDate;
let clientAge = null;

let marketName = "globus";
let marketAdress = "TC vefa";
let purchaseDate = "04.11.2024";
let purchaseTime = "19:54"

let bankMessage = "Purchase in" + marketName + " in branch: " + marketAdress;
console.log("Bank message:", bankMessage);

let hasBonusCard = true;
let hasGiftCertificate = false;

let purchaseSum = prompt("Enter purchase sum");
let hasBonusAnswer = prompt("Do you have bonus card? 1 - Yes, 0 - No");
hasBonusCard = hasBonusAnswer === "1";

if(hasBonusCard){
    //calculate bonuses
}

let paymentType = prompt("Now you want to pay? 1 - Bank card, 2 - Qr code,3 - cash ")

switch(paymentType){
    case "1":
        console.log(bankMessage);
        break;
    case "2":
        document.body.style.backgroundImage = 
        URL("")
        break;
    case "3":
        console.warn("Go to cashier!!!")
        break;
    default:
        console.error("Invalid payment type");
            


}



















