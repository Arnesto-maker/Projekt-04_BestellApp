function renderBasket() {
    let menuBasketSection = document.getElementById('menuBasketSection');
    menuBasketSection.innerHTML = " ";
    for (let index = 0; index < price.length; index++) {
        menuBasketSection.innerHTML += getBuyBasket(index);
        amountSum(index);
    }
}

function renderMenucard() {
    let menuCardSection = document.getElementById('menuCardSection');
    let menuCardSection2 = document.getElementById('menuCardSection2')
    for (let index = 0; index < dish1.length/2; index++) {menuCardSection.innerHTML += getMenuCard(index);}
    for (let index = dish1.length/2; index < dish1.length; index++) {menuCardSection2.innerHTML += getMenuCard(index);}
}
function renderTotal() {
    let totalSumNumber = document.getElementById('totalSumNumber');
    totalSumNumber.innerHTML = "";
    for (let index = 0; index < totalArray.length; index++) {
        totalSumNumber.innerHTML += getTotal(0)
    }
}