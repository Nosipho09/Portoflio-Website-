document.getElementById("placeOrder").onclick = placeOrder;


function placeOrder(){
    let numPizza = document.getElementById("numPizza").value;
    let typePizza = document.getElementById("typePizza").value;
    let deliveryLocation = document.getElementById("deliveryLocation").value;
    let birthday = document.getElementById("birthday").value;

    let orderPrice = calculateOrderPrice(numPizza, typePizza);

    let deliveryPrice = calculateDelivery(orderPrice, deliveryLocation, birthday);

    displayOrder(orderPrice, deliveryPrice);
}

function calculateOrderPrice(numPizza, typePizza){
    let orderPrice = Number(numPizza) * 120;
    let extraCharge = 0;

    if(typePizza === "Something Meaty"){
        extraCharge = Number(numPizza) * 20;
    }

    orderPrice += extraCharge;
    return orderPrice;
}

function calculateDelivery(orderPrice, deliveryLocation, birthday){
    let deliveryPrice = 0;

    if(((deliveryLocation === "Rivonia") && (orderPrice > 250)) || (birthday === "yes")){
        deliveryPrice = 0;
    }else{
        deliveryPrice = 35;
    }

    return deliveryPrice;
}

function displayOrder(orderPrice, deliveryPrice){
    let displayOutput = "<p>Thank you for your order.</p>";

    if(deliveryPrice === 0){
        displayOutput += "<p>You get free delivery</p>";
    }else{
        displayOutput += "<p>Your delivery price: R" + deliveryPrice + "</p>";
    }

    displayOutput += "<p>Your total price: R" + (orderPrice + deliveryPrice) + "</p>";
    document.getElementById("displayResults").innerHTML = displayOutput;
}