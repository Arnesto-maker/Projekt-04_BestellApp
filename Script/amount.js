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
    sumNumberArray.splice(index,1);
    sumNumberArray.splice(index,1,sumNumberAmountAndPrice.toFixed(2));
    amountSum(index);
    if (newAmount < 1) {
        let totalSumNumber = document.getElementById('totalSumNumber');
        totalSumNumber.innerHTML = " 0,00 €";
        removeFormBasket(index);
        renderBasket()
    }
}
function amountSum(index) {
    let sumNumber = document.getElementById('sumNumber'+index)
    sumNumber.innerHTML = " ";
    sumNumberAmountAndPrice = amount[index]*price[index];
    sumNumberArray.splice(index,1);
    sumNumberArray.splice(index,1,sumNumberAmountAndPrice.toFixed(2));
    sumNumber.innerHTML = ( sumNumberAmountAndPrice).toFixed(2).replace('.',',') +"€";
    sum = delivery[0]
         for (i = 0; i <sumNumberArray.length; i++) {
             sum += parseFloat(sumNumberArray[i]);
         }
         totalArray.splice(0,1,(sum.toFixed(2)))
         renderTotal();
}
        

















