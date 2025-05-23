function basketActive(index) {
    let basketIcon = document.getElementById('basketIconImg'+index);
    if (basketIcon.src.endsWith("Assets/trash-969.png")) {
        basketIcon.src = "Assets/red-delete-10437.png"
    }
}

function basketDeactive(index) {
    let basketIcon = document.getElementById('basketIconImg'+index);
    if (basketIcon.src.endsWith("Assets/red-delete-10437.png")) {
        basketIcon.src = "Assets/trash-969.png"
    }
}

function removeFromBasketChild(index) {
    price.splice(index,1);
    basketTitle.splice(index,1);
    newAmount = 1;
    amount.splice(index,1,newAmount)
}

function removeFormBasket(index) {
        removeFromBasketChild(index)
        renderBasket();
        sumNumberArray.splice(index,1)
        let sum = 0;
         for (i = 0; i <sumNumberArray.length; i++) {
         sum += parseFloat(sumNumberArray[i]);
         }
         totalArray.splice(0,1,sum.toFixed(2))
         if (price.length == 0) {
            totalArray = ['0.00'];
         }
            renderBasket()
            renderTotal();
}

function ordered() {
    let orderButton = document.getElementById('buyButton')
    orderButton.innerHTML = "Test Bestellung vorgenommen....."
    setTimeout(function() {
        window.location.reload()
    }, 2000) 
    
}

function includedFunction(index) {
    let sumNumber = document.getElementById('sumNumber'+index)
    sumNumberAmountAndPrice = amount[index]*price[index];
    amountSum(index)
    renderTotal()
    sumNumber.innerHTML = sumNumberArray[index].replace('.',',') + '€';}


function amountNumberFunction(index) {
    let amountNumber = document.getElementById('amountNumber'+index); 
     let newAmount = amount[index];
     newAmount ++;
     amount.splice(index,1,newAmount)
     amountNumber.innerHTML = newAmount + "X";
}


function addToBasket(index) {
    let dishPrice = dish1[index].price;
    let dishName = dish1[index].name;
    const included= basketTitle.includes(dishName)  ;
    if (included) {
        index = basketTitle.indexOf(dishName);
        amountNumberFunction(index)
        includedFunction(index)} 
    else {
        price.push(dishPrice);
        basketTitle.push(dishName);
        sumNumberAmountAndPrice = amount[index]*dishPrice;
        sumNumberArray.splice(index,1,sumNumberAmountAndPrice.toFixed(2));
        renderTotal()
        renderBasket();
    }
}


function buyButtonActive(){
    let buyButton = document.getElementById('buyButton');
    buyButton.classList.add('active');
}

function buyButtonDeactive() {
    let buyButton = document.getElementById('buyButton');
    buyButton.classList.remove('active');
}

