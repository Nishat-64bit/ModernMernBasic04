    ------------------------------------------------------------------    
                know about js basic 04 Naming function Project <Start>
    -------------------------------------------------------------------
        
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



    ------------------------------------------------------------------    
                know about js basic 04 Naming function Project <End>
    -------------------------------------------------------------------
        ------------------------------------------------------------------    
                know about js basic 04 Arrow function Project <End>
    -------------------------------------------------------------------
        // ! function type : 
    -----------------------------------------------
    // 1 Normal function or Naming function 
    function name(params) {
        
    }
    console.log(name)
    // output : [Function: name]
    ------------------------------------------
    // 2 Annonymus function 
    const x = function (){

    }
    console.log(x) 
    // output : [Function: x]

    /// lets know about annoynimous function 

    const y = function (){
        console.log("Hello developer");
    }
    y() // variable dea call korte hobe

    ---------------------------------------------------------------------
    // 3 . lets know about arrow function

    const arrow = ()=>{
    console.log("this is arrow function");
    }
    arrow()


    /// Ex - 1 Arrow function : 
    const arrows = (num1,num2)=> {
    let multifly = num1 * num2
    return multifly
    }
    let returnMultifly = arrows(20,25)
    console.log(returnMultifly,"is value of arrow function");
    -----------------------------------------------------------------------
    u can make discount project using arrow function : lets make it.

    /**
    * todo: make a project using arrow function
    * todo : 1. make a price function and then use para1 price, para2 quantity , make its total price
    * todo : 2. make a vat function using total price parameter
    * todo : 3. make 10% discount 
    * 
    * 
    */
    //arrow function using simple project
    // ======================================== 
    
    //price function
    const addPrice = (initPrice,initQuantity)=>{
        let total = initPrice * initQuantity;
        console.log(total,"total");
        return total
    }
    //vat function
    const addVat = (returnTotal,vat)=>{
    let vats = (returnTotal * vat)/(100+vat)
    console.log(returnTotal + Math.ceil(vats),"price with vat");
    return returnTotal + Math.ceil(vats)
    }
    //discount function
    const addDiscount = (priceWithVat,discount)=>{
        let discounts = priceWithVat- (priceWithVat * (discount/100));
        console.log(discounts,"after 10% discount");
        return Math.ceil(discounts)
    }


    // price function variable declare,

    let price = prompt("Enter the price")
    let initPrice = +price;
    let Quantity = prompt("Enter The Quantity")
    let initQuantity = +Quantity;

    // invoke price function 
    let returnTotal = addPrice(initPrice,initQuantity);


    // invoke vat function 
    let vat = 20;
    let priceWithVat = addVat(returnTotal,vat)

    // invoke discount function 
    let discount = 10;
    let returnDiscount = addDiscount(priceWithVat,discount)
    console.log(returnDiscount,"your price ");
        ------------------------------------------------------------------    
                know about js basic 04 Arrow function Project <End>
    -------------------------------------------------------------------
    