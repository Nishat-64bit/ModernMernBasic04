
// /**
//  * function project :
//  * todo1 : take two parameter, para1 is price  and  para2 is Quantity
//  * todo2 : taka 10% vat
//  * todo3 : after giving vat make speacial discount
//  */

// function addPrice(initPrice,initQuantity) {
//     let totalPrice = initPrice*initQuantity
//     return totalPrice;
// }
// function addVat(returnTotalPrice,vat) {
//     let addingvat =  (returnTotalPrice * vat) / (100+vat) ; 
//     // suppose price = 500
//     // quantity = 5;
//     // totalprice = returnTotalprice = 2500
//     // 2500 * vat (30) = 75000
//     // 75000 / (100 + vat (30))
//     // 576.92
//     // math.floor 576.92
//     // 576
//    // console.log(Math.floor(addingvat)); math.floor dile sudu porno sonka 
//     console.log(Math.ceil(addingvat)); //577 nibe
// }
// function addDiscount() {
    
// }


// let price = prompt("Enter your price")
// let Quantity = prompt("Enter The Quantity")

// let initPrice = +price // 1 +sign dea number data type e convert

// // let initQuantity = Number(Quantity)  // 2 Number dea number data type e convert

//  let initQuantity = parseInt(Quantity)// 3 parseInt dea number data type e convert

//  // now invoke/call addprice function 
//  let returnTotalPrice = addPrice(initPrice,initQuantity)


//  // now call/invoke addvat function 
//  let vat = 30;
// addVat(returnTotalPrice,vat)