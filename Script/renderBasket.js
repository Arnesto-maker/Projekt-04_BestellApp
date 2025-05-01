function renderBasket() {
    let menuBasketSection = document.getElementById('menuBasketSection');
    menuBasketSection.innerHTML = " ";
    for (let index = 0; index < price.length; index++) {
        menuBasketSection.innerHTML += getBuyBasket(index);
        amountSum(index);
    }
    
}