function addToBasket(index) {
    let dishPrice = dish1[index].price;
    let dishName = dish1[index].name;
    const included= basketTitle.includes(dishName)  ;
    if (included) {
        index = basketTitle.indexOf(dishName);
        let amountNumber = document.getElementById('amountNumber'+index); 
        let newAmount = amount[index];
        newAmount ++;
        amount.splice(index,1,newAmount)
        amountNumber.innerHTML = " ";
        amountNumber.innerHTML = newAmount + "X";
        let sumNumber = document.getElementById('sumNumber'+index)
        sumNumber.innerHTML = " ";
        sumNumberAmountAndPrice = amount[index]*price[index];
        sumNumberArray.splice(index,1,sumNumberAmountAndPrice.toFixed(2));
        amountSum(index)
        renderTotal()
        sumNumber.innerHTML = sumNumberArray[index].replace('.',',') + '€';
    } 
    else {
        price.push(dishPrice);
        basketTitle.push(dishName);
        sumNumberAmountAndPrice = amount[index]*dishPrice;
        sumNumberArray.splice(index,1,sumNumberAmountAndPrice.toFixed(2));
        renderTotal()
        renderBasket();
    } 
}

