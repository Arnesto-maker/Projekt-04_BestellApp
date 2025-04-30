function amountplus(index) {
    let amountNumber = document.getElementById('amountNumber'+index); 
    let newAmount = amount[index];
    newAmount ++;
    amount.splice(index,1,newAmount)
    amountNumber.innerHTML = " "
    amountNumber.innerHTML = newAmount + "X";
    amountSum(index)
}

function amountMinus(index) {
    let amountNumber = document.getElementById('amountNumber'+index);
    let newAmount = amount[index];
    newAmount --;
    amount.splice(index,1,newAmount)
    amountNumber.innerHTML = " "
    amountNumber.innerHTML = newAmount + "X";
    amountSum(index)
    if (newAmount < 1) {
        price.splice(index,1);
        basketTitle.splice(index,1);
        newAmount = 1;
        amount.splice(index,1,newAmount)
        renderBasket()
    }
}

function amountSum(index) {
    let sumNumber = document.getElementById('sumNumber'+index)
    sumNumber.innerHTML = " ";
    sumNumberAmountAndPrice = amount[index]*price[index];
    sumNumberArray.splice(index,1,sumNumberAmountAndPrice.toFixed(2));
    sumNumber.innerHTML = ( sumNumberAmountAndPrice).toFixed(2) + "€";
}

















