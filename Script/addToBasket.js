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
    } else {
        price.push(dishPrice);
        basketTitle.push(dishName);
    } 
}

