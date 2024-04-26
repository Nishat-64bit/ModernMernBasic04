
/**
 * function project :
 * todo1 : take two parameter, para1 is price  and  para2 is Quantity
 * todo2 : taka 10% vat
 * todo3 : after giving vat make speacial discount
 */
// function price 
function addPrice(initPrice, initQuantity){
let total = initPrice * initQuantity
console.log(total,"is totalPrice");
return total;
}
// function vat
function addVat(ReturnTotal,vat){
    let addingvat = (ReturnTotal*vat)/(100+vat)
    console.log(ReturnTotal + Math.ceil(addingvat),"is addivat");
    return ReturnTotal + Math.ceil(addingvat);
}
// function discount 
function makeDiscount(returnPricevat,discount){
    let addDiscount = returnPricevat - (returnPricevat * (discount/100))
    console.log(addDiscount,"discountprice");
    return Math.ceil(addDiscount)
}


let price = prompt("Enter your price")
let initPrice = +price;
let product = prompt("Enter Quantity")
let initQuantity = +product;

/// invoke addprice function 
let ReturnTotal = addPrice(initPrice, initQuantity)

// invoke addvat function
let vat = 30
let returnPricevat = addVat(ReturnTotal,vat)

// invoke discount function
let discount = 10
let returnDiscount = makeDiscount(returnPricevat,discount)
console.log(returnDiscount);


