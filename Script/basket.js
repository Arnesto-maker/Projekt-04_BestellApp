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
function removeFormBasket(index) {
        price.splice(index,1);
        basketTitle.splice(index,1);
        newAmount = 1;
        amount.splice(index,1,newAmount)
        renderBasket();
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
